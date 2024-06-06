import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { dataBase } from "../../config/Friebase";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { fetchData } from "../../store/dataSlice";
import { Link } from "react-router-dom";
const headTable = [
  {
    title: "id",
  },
  {
    title: "Image",
  },
  {
    title: "Product",
  },
  {
    title: "Price",
  },
  {
    title: "Update",
  },
  {
    title: "Delete",
  },
];
const Product = () => {
  const { products, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const deleteProduct = (id) => {
    const itemDoc = doc(dataBase, "products", id);
    deleteDoc(itemDoc);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product">
      <h1>All Products</h1>
      <table>
        <thead>
          <tr>
            {headTable.map((el, i) => {
              return <td key={i}>{el.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((el, i) => {
            return (
              <tr key={i}>
                <td style={{ color: "#777" }}>{i}</td>
                <td>
                  <img src={el.image} style={{ width: "100px" }} alt="" />
                </td>
                <td style={{ fontSize: "22px" }}>{el.name}</td>
                <td>{el.price}</td>
                <td>
                  <h4 onClick={() => deleteProduct(el.id)}>
                    <MdDelete />
                    <span>Delete</span>
                  </h4>
                </td>
                <td>
                  <Link to={`/admin/product/${el.id}`}>
                    <h3>
                      <FaPenToSquare />
                      Update
                    </h3>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
