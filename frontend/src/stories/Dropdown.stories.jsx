import Dropdown from '../components/core/Dropdown/Dropdown';
import useDropdown from '../components/core/Dropdown/useDropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,

  argTypes: {},
};

const Template = (args) => {
  const dropdownHook = useDropdown();

  return <Dropdown {...args} {...dropdownHook} />;
};

export const Primary = Template.bind({});
Primary.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  title: 'Dropdown',
  closeAutomatically: true,
};
