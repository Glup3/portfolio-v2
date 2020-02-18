import theme from 'styled-theming';

const primaryColor = theme('mode', {
  light: '#000000',
  dark: '#ffffff',
});

const surfaceColor = theme('mode', {
  light: '#ffffff',
  dark: '#121212',
});

// eslint-disable-next-line import/prefer-default-export
export { primaryColor, surfaceColor };
