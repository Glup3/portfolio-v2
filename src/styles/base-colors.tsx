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

const boxShadow = theme('mode', {
  light: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
  dark:
    '0 4px 5px 0 rgba(255, 255, 255, 0.14), 0 1px 10px 0 rgba(255, 255, 255, 0.12), 0 2px 4px -1px rgba(255, 255, 255, 0.3)',
});

export { primaryColor, surfaceColor, accentColor, strongPrimaryColor, boxShadow };
