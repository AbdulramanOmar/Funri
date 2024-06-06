import { FaLocationArrow, FaMessage, FaPhone } from "react-icons/fa6";
import { Hero } from "../component/index";
import about from "../component/Assent/couch.png";
import "./style.css";
const ContactUs = () => {
  return (
    <div className="contact">
      <Hero height="70vh" toogle={false} title={`Contact Us`} img={about} />
      <div className="container">
        <div className="contact-content">
          <div className="contact-icons">
            <div>
              <FaLocationArrow />
              <span>43 Raymouth Rd. Baltemoe </span>
            </div>
            <div>
              <FaMessage />
              <span>info@yourdomain.com</span>
            </div>
            <div>
              <FaPhone />
              <span>+1 294 3925 3939</span>
            </div>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Frist Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Enter Email" />
            <textarea
              name="true"
              cols="30"
              style={{ minHeight: "calc(1.5em + .75rem + 2px)" }}
              rows="10"
              placeholder="Message..."
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
