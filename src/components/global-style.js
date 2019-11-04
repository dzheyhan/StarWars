import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Star Jedi';
    font-style: normal;
    font-weight: 400;
    src: local('Star Jedi'), local('StarJedi-Regular'),
        url(../../public/fonts/stratWars/STARWARS.woff) format('woff'),
        url(../../public/fonts/stratWars/STARWARS.ttf) format('truetype');
    }

   body {
    font-family: "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
  }
  
  h1, h2, h3, h3, m4, h5, h6{
    font-family: "Star Jedi", "Roboto", "Oxygen";
  }
`;

export default GlobalStyle;
