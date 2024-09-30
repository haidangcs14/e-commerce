import { memo } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <h1 className="footer__about__logo">About us</h1>
              <ul>
                <li>Address: Cau Giay - Ha Noi</li>
                <li>Phone: 0987-654-321</li>
                <li>Email: dang.dev@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h6>Store</h6>

              <ul>
                <li>
                  <Link to="">Contact</Link>
                </li>
                <li>
                  <Link to="">Information about us</Link>
                </li>
                <li>
                  <Link to="">Business products</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="">Account nformation</Link>
                </li>
                <li>
                  <Link to="">Cart</Link>
                </li>
                <li>
                  <Link to="">List of favorite products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer__widget">
              <h6>Promotions & Offers</h6>
              <p>Register information here</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Enter an email" />
                  <button type="submit" className="button-submit">
                    Register
                  </button>
                </div>
                <div className="footer__widget__social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
