import theme from 'styled-theming';

const primaryColor = theme('mode', {
  light: '#000000',
  dark: '#ffffff',
});

// eslint-disable-next-line import/prefer-default-export
export { primaryColor };
