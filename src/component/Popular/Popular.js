import { motion } from "framer-motion";
import { PopularProducts } from "../Assent/Data";
import "./popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h2>Drag Background</h2>
      {PopularProducts.map((el) => {
        return (
          <div className="popular-card" key={el.id}>
            <div className="img">
              <img src={el.img} alt="" />
              <motion.span
                drag
                whileDrag={{ scale: 1.2, color: "#3b5d50" }}
              ></motion.span>
            </div>
            <div className="popular-text">
              <h3>{el.name}</h3>
              <p>{el.des}</p>
              <span>Read More </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
