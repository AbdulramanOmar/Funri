import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchData } from "../../store/dataSlice";
const Card = () => {
  const dispatch = useDispatch();
  const { products, loading} = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="cards">
      <div className="container">
        {products.map((el) => {
          return (
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={el.id}
              className="card"
            >
              <div className="img">
                <img src={el.image} alt="" />
              </div>
              <h2>{el.name}</h2>
              <p>${el.price}.00</p>
              <button onClick={() => handleClick(el.id)}>Add To Cart</button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
