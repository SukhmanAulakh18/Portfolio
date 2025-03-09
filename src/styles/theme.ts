import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#1E88E5', // Tech-inspired blue
    secondary: '#FFA000', // Complementary orange/amber
    background: '#FFFFFF', // White background for light mode
    text: '#333333', // Dark text color
    textLight: '#FFFFFF', // Light text color for dark mode
    border: '#E0E0E0', // Light gray for borders
    accent: '#FF4081', // Accent color for highlights
  },
  typography: {
    fontFamily: {
      headings: 'Poppins, sans-serif',
      body: 'Inter, sans-serif',
      code: 'Fira Code, monospace',
    },
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
    },
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export default theme;