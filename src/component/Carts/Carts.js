import { useDispatch, useSelector } from "react-redux";
import "./carts.css";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/dataSlice";

const headTable = [
  { title: "Image" },
  { title: "Product" },
  { title: "Price" },
  { title: "Quantity" },
  { title: "Total" },
  { title: "Remove" },
];

const Carts = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);
  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const increaseProductQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseProductQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="carts">
      <table>
        <thead>
          <tr>
            {headTable.map((el, i) => (
              <th key={i}>{el.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((el, i) => (
            <tr key={i}>
              <td>
                <img src={el.image} alt={el.name} />
              </td>
              <td style={{ fontWeight: "bolder", fontSize: "22px" }}>
                {el.name}
              </td>
              <td>${el.price}.00</td>
              <td>
                <span
                  style={{
                    color: "#2196f3",
                    fontSize: "36px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => increaseProductQuantity(el.id)}
                >
                  +
                </span>
                <span
                  style={{
                    padding: "10px",
                    background: "white",
                    fontSize: "32px",
                  }}
                >
                  {el.quantity}
                </span>
                <span
                  style={{
                    color: "rgb(234, 82, 82)",
                    fontSize: "36px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => decreaseProductQuantity(el.id)}
                >
                  -
                </span>
              </td>
              <td>${el.price * el.quantity}</td>
              <td
                style={{ color: "red", fontSize: "22px", cursor: "pointer" }}
                onClick={() => removeProduct(el.id)}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
