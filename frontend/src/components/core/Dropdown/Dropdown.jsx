import classes from './dropdown.module.css';
import { classMerge as cm } from '../../../helpers/classMerge';
import ChevronDown from '../icons/ChevronDown';

/**
 * A dropdown component that allows the user to select an option from a list of options.
 * Note that this component does not support multiples of the same option.
 * To obtain isOpen, toggle, value and setValue, use the **useDropdown** hook.
 *
 *
 *
 * @param {Array} props.options - The list of options to be displayed in the dropdown.
 * @param {string} [props.title='Dropdown'] - The title of the dropdown.
 * @param {boolean} [props.closeAutomatically=true] - Whether the dropdown should close automatically after an option is selected.
 * @param {boolean} props.isOpen - Whether the dropdown is currently open.
 * @param {function} props.toggle - The function to toggle the dropdown open and closed.
 * @param {string} props.value - The currently selected option.
 * @param {function} props.setValue - The function to set the selected option.
 * @returns {JSX.Element} - The dropdown component.
 *
 * @example
 * const { isOpen, toggle, value, setValue } = useDropdown();
 * <Dropdown
 *  options={['Option 1', 'Option 2', 'Option 3']}
 *  title='Dropdown'
 *  isOpen={isOpen}
 *  toggle={toggle}
 *  value={value}
 *  setValue={setValue}
 * />
 */
function Dropdown({
  options,
  title = 'Dropdown',
  closeAutomatically = true,
  isOpen,
  toggle,
  value,
  setValue,
}) {
  function onSelect(item) {
    setValue(item);
    if (closeAutomatically) {
      toggle();
    }
  }

  return (
    <>
      <button className={classes.opener} onClick={toggle}>
        {title} <ChevronDown />
      </button>
      <div className={isOpen ? cm(classes.modal, classes.top) : classes.hidden}>
        {options.map((item, index) => (
          <button
            key={index}
            className={item == value ? cm(classes.selected, classes.option) : classes.option}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Dropdown;
