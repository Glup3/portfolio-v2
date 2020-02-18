import theme from 'styled-theming';

const primaryColor = theme('mode', {
  light: '#000000',
  dark: '#c1c1c1',
});

const strongPrimaryColor = theme('mode', {
  light: '#000000',
  dark: '#ffffff',
});

const accentColor = theme('mode', {
  light: '#039be5',
  dark: '#039be5',
});

const surfaceColor = theme('mode', {
  light: '#ffffff',
  dark: '#121212',
});

// eslint-disable-next-line import/prefer-default-export
export { primaryColor, surfaceColor, accentColor, strongPrimaryColor };
