import { useState, createContext, useContext } from "react";
import MenuIcon from "../assets/menu.svg";
import MenuCloseIcon from "../assets/close-menu.svg";

const NavMenuContext = createContext(undefined);

const MenuButton = () => {
  const vizContext = useContext(NavMenuContext);

  return (
    <div
      onClick={() => vizContext?.setSideBarVisible(!vizContext?.sideBarVisible)}
    >
      {vizContext?.sideBarVisible ? (
        <img src={MenuCloseIcon} />
      ) : (
        <img src={MenuIcon} />
      )}
    </div>
  );
};

const NavLink = (props) => {
  return (
    <a href={props.link} className="nav-link">
      {props.text}
    </a>
  );
};

const SideBar = () => {
  const vizContext = useContext(NavMenuContext);

  const navbarMenuItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Selaa",
      link: "/browse",
    },
    {
      text: "Kirjaudu",
      link: "/login",
    },
    {
      text: "Kirjaudu ulos",
      link: "/logout",
    },
  ];

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

  return (
    <NavMenuContext.Provider
      value={{
        sideBarVisible: sideBarVisible,
        setSideBarVisible: setSideBarVisible,
      }}
    >
      <header className="">
        <MenuButton />
      </header>
      <SideBar />
      {props.children}
    </NavMenuContext.Provider>
  );
};

export { MenuButton, SideBar, NavBarLayout };
