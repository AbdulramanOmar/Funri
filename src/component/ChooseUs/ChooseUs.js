import Services from "../Service/Services";
import "./ChooseUs.css";
import { motion } from "framer-motion";

const ChooseUs = () => {
  return (
    <div className="choose">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{
          once: true,
        }}
        className="choose-text"
      >
        <h1>Why Choose Us</h1>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <Services toogle="repeat(auto-fill,minmax(200px,1fr))" />
      </motion.div>
      <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className="choose-img"
      >
        <svg
          width="255"
          height="217"
          viewBox="0 0 255 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="3.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="33.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="63.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="93.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="123.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="153.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="183.5" r="3.5" fill="#F9BF29" />
          <circle cx="3.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="34.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="65.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="96.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="127.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="158.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="189.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="220.5" cy="213.5" r="3.5" fill="#F9BF29" />
          <circle cx="251.5" cy="213.5" r="3.5" fill="#F9BF29" />
        </svg>

        <img src={require("../Assent/why-choose-us-img.jpg")} alt="" />
      </motion.div>
    </div>
  );
};

export default ChooseUs;
