import { motion } from "framer-motion";
import { ServiceContent } from "../Assent/Data";
import "./service.css";

const Services = (props) => {
  return (
    <div className="service" style={{
      display:"grid",
      gridTemplateColumns:props.toogle,
      gap:"20px",
      margin:"auto"
    }}>
      {ServiceContent.map((el, i) => {
        return (
          <motion.div key={i} className="service-box">
            {el.icon}
            <h5>{el.title}</h5>
            <p>{el.des}</p>
            <motion.span
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              drag
              whileDrag={{ scale: 4 , backgroundColor:"#022b1b87" }}
            ></motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
