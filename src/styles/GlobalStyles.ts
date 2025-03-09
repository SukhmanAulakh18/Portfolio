import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1E88E5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
  }

  .download-button {
    background-color: #FFA000;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }

  .download-button:hover {
    background-color: #1E88E5;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    body {
      padding: 0 10px;
    }
  }
`;

export default GlobalStyles;