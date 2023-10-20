import { useState } from 'react';

/**
 * A custom hook for managing a multi-select dropdown.
 * @param {Array} values - An array of objects representing the available options for the dropdown.
 * @returns {Object} An object containing functions and state variables for managing the dropdown.
 * @returns {Array} selected - An array of strings representing the selected values.
 * @returns {function} setSelected - A function to set the selected values.
 * @returns {function} getSelected - A function to get the selected values.
 * @returns {function} clearSelected - A function to clear the selected values.
 * @returns {boolean} isOpen - The current state of the dropdown.
 * @returns {function} toggle - A function to toggle the dropdown state.
 */
export default function useMultiDropdown(values) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  const [selected, setSelected] = useState([]);

  /**
   * Returns an array of the currently selected options.
   * @returns {Array} An array of objects representing the currently selected options.
   */
  const getSelected = () =>
    selected.map((item) => {
      try {
        const set = parseInt(item.split('-')[0]);
        const value = parseInt(item.split('-')[1]);

        // object-injection is not possible here as we are just reading
        // eslint-disable-next-line security/detect-object-injection
        return values[set].values[value];
      } catch (e) {
        // TODO: handle error
        console.error('Failed to get selected: ', e);
      }
    });

  /**
   * Clears the currently selected options.
   */
  const clearSelected = () => setSelected([]);

  return { selected, setSelected, getSelected, clearSelected, isOpen, setIsOpen, toggleIsOpen };
}
