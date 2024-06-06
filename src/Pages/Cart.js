import { Hero, Testimeniol, ChooseUs } from "../component/index";
import about from "../component/Assent/couch.png";
import Carts from "../component/Carts/Carts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
  const {allPrice} = useSelector((state) => state.data)
  return (
    <div
      className="Cart"
      style={{ background: "#eff2f1", paddingBottom: "20px" }}
    >
      <Hero height="70vh" toogle={false} title={`Cart`} img={about} />
      <div className="container">
        <Carts />
        <div className="cart-tatol">
          <h2>CART TOTALS</h2>
          <h5>
            Subtotal : <span>${allPrice}.00</span>
          </h5>
          <h5>
            Total : <span>${allPrice}.00</span>
          </h5>
          <Link to="/checkout">
            <button>CheckOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
