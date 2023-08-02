import { useState, createContext, useContext, useEffect } from "react";
import MenuIcon from "../assets/menu.svg";
import MenuCloseIcon from "../assets/close-menu.svg";
import "./css/navLayout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavMenuContext = createContext(undefined);

const navbarMenuItems = [
  {
    text: "Avoimet Työpaikat",
    link: "/browse",
  },
  {
    text: "Jätä työpaikkailmoitus",
    link: "/query",
  },
  {
    text: "Suosikit",
    link: "/favorites",
  },
  {
    text: "Rekisteröidy",
    link: "/register",
    styling: " button-filled",
  },
  {
    text: "Kirjaudu",
    link: "/login",
    styling: " button-hollow",
  },
];

const blacklistAddr = ["/landing", "/login"];

const MenuButton = () => {
  const vizContext = useContext(NavMenuContext);

  return (
    <>
      {vizContext?.sideBarVisible ? (
        <img
          className="menu-burger-button"
          onClick={() =>
            vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)
          }
          src={MenuCloseIcon}
        />
      ) : (
        <img
          className="menu-burger-button"
          onClick={() =>
            vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)
          }
          src={MenuIcon}
        />
      )}
    </>
  );
};

const NavLink = ({ styling = "", ...props }) => {
  return (
    <Link to={props.link} className={`nav-link${styling}`}>
      {props.text}
    </Link>
  );
};

//not used for anything but useful for mobile menu when maximized
const SideBar = () => {
  const vizContext = useContext(NavMenuContext);

  return (
    <>
      {vizContext?.sideBarVisible && (
        <div
          className="sidebar-backblur"
          onClick={() => vizContext.setSideBarVisible(false)}
        />
      )}
      <div className={`sidebar`}>
        <MenuButton />
        <div className="">
          {navbarMenuItems.map((item, i) => (
            <NavLink key={i} link={item.link} text={item.text} />
          ))}
        </div>
      </div>
    </>
  );
};

const NavBarLayout = (props) => {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (blacklistAddr.includes(location.pathname)) setNavbarVisible(false);
    else setNavbarVisible(true);
  }, [location]);

  return (
    <NavMenuContext.Provider
      value={{
        sideBarVisible: sideBarVisible,
        setSideBarVisible: setSideBarVisible,
      }}
    >
      {navbarVisible && (
        <header className="navbar">
          <div className="nav-logo-wrapper" onClick={() => navigate("/")}>
            <img className="nav-logo" src={"/pictures/urapolku.png"} />
          </div>
          <div className="nav-items-wrapper">
            {navbarMenuItems.map((item) => (
              <NavLink
                key={item.link}
                link={item.link}
                text={item.text}
                styling={item.styling}
              />
            ))}
          </div>

          <MenuButton />
        </header>
      )}
      {/*<SideBar />*/}
      {props.children}
    </NavMenuContext.Provider>
  );
};

export { MenuButton, SideBar, NavBarLayout };
