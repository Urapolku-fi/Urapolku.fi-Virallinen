import { MultiDropdown, useMultiDropdown } from '../components/core';

export default {
  title: 'MultiDropdown',
  component: MultiDropdown,

  argTypes: {},
};

const Template = (args) => {
  const multiDropdownHook = useMultiDropdown();

  return <MultiDropdown {...args} {...multiDropdownHook} />;
};

export const Primary = Template.bind({});
Primary.args = {
  sets: [
    {
      title: 'Set 1',
      values: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
      ],
    },
    {
      title: 'Set 2',
      values: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      title: 'Set 3',
      values: ['Option 1', 'Option 2', 'Option 3'],
    },
  ],
  title: 'MultiDropdown',
};
