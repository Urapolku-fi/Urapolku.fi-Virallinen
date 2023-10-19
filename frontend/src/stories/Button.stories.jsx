import Button from '../components/core/Button/Button';

export default {
  title: 'Button',
  component: Button,

  argTypes: {
    variant: {
      options: ['normal', 'search', 'rounded'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'normal',
  glow: true,
  outline: false,
  dark: false,
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'normal',
  glow: false,
  outline: false,
  dark: false,
  size: 'medium',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
  variant: 'normal',
  glow: false,
  outline: true,
  dark: false,
  size: 'medium',
};
