import { motion } from "framer-motion";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero" style={{ height: props.height }}>
      <div className="container">
        <div className="hero-content">
          <motion.div
            animate={{ x: [-400, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text"
          >
            <h1>{props.title}</h1>
            {props.toogle && (
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            )}

            {props.toogle ? (
              <>
                <button>Shop Now</button>
                <button>Explore</button>
              </>
            ) : null}
          </motion.div>
          <motion.div
            animate={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-img"
          >
            <img src={props.img} alt="" />
          </motion.div>
          {props.toogle && (
            <motion.svg
              animate={{ scale: [0, 1] }}
              transition={{ duration: 2, ease: "easeOut" }}
              width="255"
              height="217"
              viewBox="0 0 255 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <circle cx="3.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="3.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="33.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="63.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="93.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="123.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="153.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="183.5" r="3.5" fill="white" />
                <circle cx="3.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="34.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="65.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="96.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="127.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="158.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="189.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="220.5" cy="213.5" r="3.5" fill="white" />
                <circle cx="251.5" cy="213.5" r="3.5" fill="white" />
              </g>
            </motion.svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
