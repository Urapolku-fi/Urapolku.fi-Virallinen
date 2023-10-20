import classes from './multidropdown.module.css';
import ChevronDown from '../icons/ChevronDown';
import { classMerge as cm } from '../../../helpers/classMerge';
import { Button } from '..';

function MultiDropdown({
  sets,
  title,
  selected,
  setSelected,
  clearSelected,
  isOpen,
  setIsOpen,
  toggleIsOpen,
}) {
  function handleToggle() {
    toggleIsOpen();
  }

  function handleSelect(set, value) {
    const newSelected = [...selected];
    if (newSelected.includes(`${set}-${value}`)) {
      newSelected.splice(newSelected.indexOf(`${set}-${value}`), 1);
    } else {
      newSelected.push(`${set}-${value}`);
    }

    setSelected(newSelected);
  }

  function handleApply() {
    setIsOpen(false);
  }

  return (
    <>
      <button className={classes.opener} onClick={handleToggle}>
        {title} <ChevronDown />
      </button>
      <div className={isOpen ? cm(classes.modal, classes.top) : classes.hidden}>
        {sets.map((set, i) => (
          <div key={i} className={classes.set}>
            <p className={classes.title}>{set.title}</p>
            <ul className={cm(classes.options)}>
              {set.values.map((item, j) => (
                <button key={j} onClick={() => handleSelect(i, j)}>
                  <li
                    className={cm(
                      classes.option,
                      selected.includes(`${i}-${j}`) ? classes.selected : '',
                    )}
                  >
                    <span>{item}</span>
                  </li>
                </button>
              ))}
            </ul>
          </div>
        ))}
        <div className={classes.buttonContainer}>
          <Button onClick={handleApply}>Apply</Button>
          <Button outline onClick={clearSelected}>
            Clear
          </Button>
        </div>
      </div>
    </>
  );
}

export default MultiDropdown;
