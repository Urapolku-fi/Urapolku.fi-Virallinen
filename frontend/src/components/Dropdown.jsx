import { useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleMenuItemClick = (option) => {
    //already selected -> remove from selected
    if (selected.includes(option)) {
      const newSelected = selected.filter((opt) => opt !== option);
      //run the external value setter -> expose component internal values outside of it
      if (props.onChange) props.onChange(newSelected);
      setSelected(newSelected);
    }

    //not in the selected list and less than 4 selected -> add to selected
    if (selected.length < props.numberToSelect && !selected.includes(option)) {
      const newSelected = [...selected, option];
      if (props.onChange) props.onChange(newSelected);
      setSelected(newSelected);
    }
  };

  const styles = {
    arrowUp: {
      transform: "rotate(180deg)",
    },
    mainBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      outline: ".1rem solid #CCCCCC",
      borderRadius: ".5rem",
      padding: ".4rem 1.5rem",
      fontFamily: "Montserrat, sans-serif",
      userSelect: "none",
      height: "3.5rem",
    },
    title: {
      fontWeight: "200",
      marginBottom: ".5rem",
    },
    menu: {
      borderRadius: ".5rem",
      outline: ".1rem solid #CCCCCC",
      fontFamily: "Montserrat, sans-serif",
      position: "absolute",
      width: "100%",
      boxSizing: "border-box",
      zIndex: "999",
      maxHeight: "20rem",
      overflow: "scroll",
      backgroundColor: "white",
      padding: "1rem 0",
    },
    menuClosed: {
      display: "none",
    },
    wrapper: {
      position: "relative",
    },
    selectedText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    menuItem: {
      padding: ".5rem 1.5rem",
      margin: "0",
      userSelect: "none",
    },
    selectedMenuItem: {
      backgroundColor: "#120A2F",
      color: "white",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>{props.title}</h3>
      <div style={styles.mainBox} onClick={() => setOpen(!open)}>
        <p style={styles.selectedText}>
          {selected.map((op) => op.label).join(", ")}
        </p>
        <img
          style={open ? styles.arrowUp : {}}
          src="pictures/expand-more.png"
          alt=""
        />
      </div>
      <div style={open ? styles.menu : styles.menuClosed}>
        {props.options?.map((option, i) => (
          <p
            style={
              selected.includes(option)
                ? { ...styles.selectedMenuItem, ...styles.menuItem }
                : styles.menuItem
            }
            onClick={() => handleMenuItemClick(option)}
            key={i}
          >
            {option.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
