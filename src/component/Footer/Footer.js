import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { footerJob, footerLinks, footerSupport } from "../Assent/Data";
import "./footer.css";
import { TfiTwitter } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="text">
            <h1>
              Furni<span></span>
            </h1>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="social">
              <FaFacebookF />
              <TfiTwitter />
              <FaInstagram />
              <BsLinkedin />
            </div>
          </div>
          <ul>
            {footerLinks.map((el, i) => {
              return <li key={i}>{el.title}</li>;
            })}
          </ul>
          <ul>
            {footerSupport.map((el, i) => {
              return <li key={i}>{el.title}</li>;
            })}
          </ul>
          <ul>
            {footerJob.map((el, i) => {
              return <li key={i}>{el.title}</li>;
            })}
          </ul>
        </div>
        <div className="last-footer">
          <span>
            Copyright ©2024. All Rights Reserved. — Designed with love by
            Untree.co Distributed By
          </span>
          <div>
            <span>Trem & Condition</span>
            <span>Privacy Polie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
