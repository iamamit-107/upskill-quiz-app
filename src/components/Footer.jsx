import React from "react";
import img from "../assets/footer.png";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-grid">
          <div>
            <h4>about us</h4>
            <p>
              Upskill is a peer to peer skill sharing platform. It enables
              individuals and organizations to share skills and exchange
              technical knowledge to bridge the skills gap in Bangladesh.
            </p>
            <img src={img} alt="" />
          </div>

          <div>
            <h4>helpful links</h4>
            <div>
              <a href="">FAQ</a>
              <a href="">Terms and Condition</a>
              <a href="">Privacy Statement</a>
              <a href="">About Upskill</a>
            </div>
          </div>

          <div>
            <h4>contact</h4>
            <p>Upskill, Level 3, House 9 Lane - 17/E, Dhaka 1213</p>
            <p>0171 4053 213</p>
            <p>rafi.upskill@gmail.com</p>
          </div>

          <div>
            <h4>subscribe to our newsletter</h4>
            <input type="email" name="" id="" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
