import { memo, useState } from "react";
import "./Header.scss";
import {
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formater } from "utils/formater";
import { ROUTERS } from "utils/router";

function Header() {
  const [menus, setMenus] = useState([
    {
      name: "Homepage",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Store",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Products",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Meat",
          path: "",
        },
        {
          name: "Vegetable",
          path: "",
        },
        {
          name: "Fish",
          path: "",
        },
        {
          name: "Fast food",
          path: "",
        },
      ],
    },
    {
      name: "Posts",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Contact",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  hello@gmail.com
                </li>
                <li>Freeship up to {formater(100000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to="">
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineGlobal />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <AiOutlineUser />
                    <span>Sign In</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>E-commerce</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu__dropdown">
                        {menu.child.map((child, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={child.path}>{child.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formater(19999)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
