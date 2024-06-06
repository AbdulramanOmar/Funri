import { BiMessage, BiSend } from "react-icons/bi";
import "./Message.css";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <div className="text">
            <BiMessage />
            <span>Subscribe to Newsletter</span>
          <form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter your Email" />
            <button>
              <BiSend />
            </button>
          </form>
        </div>
        <div className="message-img">
          <img src={require("../Assent/sofa.png")} />
        </div>
      </div>
    </div>
  );
};

export default Message;
