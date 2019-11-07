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
    
   @font-face {
    font-family: 'Distant Galaxy';
    src: local('DistantGalaxy'), local('DistantGalaxyAlternate'), local('DistantGalaxyAlternateItalic'),
    local('DistantGalaxyAltoutline'),local('DistantGalaxyAltoutlineItalic'),local('DistantGalaxyItalic'),
    local('DistantGalaxyOutline'),local('DistantGalaxyOutlineItalic'),
    local('DistantGalaxySymbols'),local('DistantGalaxySymbolsItalic'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxy-0l3d.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyAlternate-OE4d.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyAlternateItalic-3RDM.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyAltoutline-e2Bp.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyAltoutlineItalic-ZJDZ.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyItalic-WV3Y.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyOutline-xoeO.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxyOutlineItalic-4yA4.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxySymbols-aylE.ttf) format('truetype'),
        url(../../public/fonts/distantGalaxy/SfDistantGalaxySymbolsItalic-EXv9.ttf) format('truetype');
    } 
    
    
   body {
    font-family: "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
  }

  a, a:hover{
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
  
  input {
    background-color: #EFF2F7;
    border-color: #E5E9F2;
    color: #3C4858;
  }
  
  .colorYellow{
    color: #FFE300;
  }
  
  .colorLightBlue{
     color: #4BD5EE;
  }
  
  .colorBlack{
    color: #000;
  }
  
  .colorWhite{
    color:#FFF;
  }

  .cursorPointer{
    cursor: pointer;
  }
  
  h1, h2, h3, h3, m4, h5, h6{
    font-family: "DistantGalaxy", "Star Jedi", "Roboto", "Oxygen";
  }
  }
`;

export default GlobalStyle;
