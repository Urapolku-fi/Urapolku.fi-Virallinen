import { useState } from 'react';

/**
 * Custom hook for managing dropdown state and value.
 *
 * @example const { isOpen, toggle, value, setValue } = useDropdown();
 *
 * @param {string} [initialValue=''] - The initial value for the dropdown.
 * @returns {object} - An object containing the current state and functions to update it.
 * @returns {boolean} - isOpen - The current state of the dropdown.
 * @returns {function} - toggle - A function to toggle the dropdown state.
 * @returns {string} - value - The current value of the dropdown.
 * @returns {function} - setValue - A function to set the dropdown value.
 */
function useDropdown(initialValue = '') {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(initialValue);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle, value, setValue };
}

export default useDropdown;
