import { useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  const styles = {
    arrowUp: {},
    mainBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      outline: ".1rem solid #CCCCCC",
      borderRadius: ".5rem",
      padding: ".4rem 1.5rem",
      fontFamily: "Montserrat, sans-serif",
    },
    title: {
      fontWeight: "200",
      marginBottom: ".5rem",
    },
    menu: {
      borderRadius: ".5rem",
      outline: ".1rem solid #CCCCCC",
      padding: ".4rem 1.5rem",
      fontFamily: "Montserrat, sans-serif",
      position: "absolute",
      width: "100%",
      boxSizing: "border-box",
      zIndex: "999",
      maxHeight: "20rem",
      overflow: "scroll",
    },
    menuClosed: {
      height: "0",
      opacity: "0",
    },
    wrapper: {
      position: "relative",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>{props.title}</h3>
      <div style={styles.mainBox} onClick={() => setOpen(!open)}>
        <p>Example selected item</p>
        <img
          style={open ? styles.arrowUp : {}}
          src="pictures/expand-more.png"
          alt=""
        />
      </div>
      <div style={open ? styles.menu : styles.menuClosed}>
        {props.options?.map((option, i) => (
          <p key={i}>{option.label}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
