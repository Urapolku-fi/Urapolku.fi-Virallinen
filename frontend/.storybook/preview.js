/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'urapolku dark',
      values: [
        { name: 'urapolku dark', value: '#0b0121' },
        { name: 'urapolku light', value: '#ececec' },
      ],
    },
  },
};

export default preview;
