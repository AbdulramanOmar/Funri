import "./material.css";
import { materialProducts } from "../Assent/Data";
import { motion } from "framer-motion";

const Material = () => {
  return (
    <div className="material">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="material-text"
      >
        <h3>Crafted with excellent material.</h3>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button>Exlpore</button>
      </motion.div>
      {materialProducts.map((el) => {
        return (
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{once:true}}
            key={el.id}
            className="material-card"
          >
            <div className="img">
              <img src={el.img} alt="" />
            </div>
            <h2>{el.name}</h2>
            <p>${el.price}.00</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Material;
