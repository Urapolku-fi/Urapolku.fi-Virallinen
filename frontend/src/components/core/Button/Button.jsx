import classes from './button.module.css';

/**
 * A customizable button component.
 *
 * ---
 * ## Default values:
 * - variant: 'normal'
 * - glow: false
 * - outline: false
 * - size: 'medium'
 *
 * ---
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The content of the button.
 * @param {"normal" | "search" | "rounded"} [props.variant='normal'] - The variant of the button.
 * @param {boolean} [props.glow=false] - Whether the button should have a glow effect.
 * @param {boolean} [props.outline=false] - Whether the button should have an outline.
 * @param {"small" | "medium" | "large"} [props.size='medium'] - The size of the button.
 * @param {boolean} [props.dark=false] - Whether the button should have a dark theme.
 * @param {string} [props.className] - The class name of the button. You don't have to prefix with space.
 * @returns {JSX.Element} - The button component.
 */
function Button({ children, variant, glow, outline, size, dark, className: classNameProp }) {
  if (variant == undefined) variant = 'normal';
  if (glow == undefined) glow = false;
  if (outline == undefined) outline = false;
  if (size == undefined) size = 'medium';
  if (dark == undefined) dark = false;

  let className = classes.button;

  if (glow) className += ` ${classes.glow}`;
  if (outline) className += ` ${classes.outline}`;
  if (size == 'small') className += ` ${classes.small}`;
  if (size == 'medium') className += ` ${classes.medium}`;
  if (size == 'large') className += ` ${classes.large}`;
  if (variant == 'normal') className += ` ${classes.normal}`;
  if (variant == 'search') className += ` ${classes.search}`;
  if (variant == 'rounded') className += ` ${classes.rounded}`;
  if (dark) className += ` ${classes.dark}`;

  return <button className={`${className} ${classNameProp}`}>{children}</button>;
}

export default Button;
