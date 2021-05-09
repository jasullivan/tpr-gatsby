import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --tpr-color-primary: #333333;
    --color-light-grey: #747474;
    --color-vlight-grey: #E9E9E9;
    --color-vdark-grey: #111;
    --color-white: #fff;
    --color-black: #000;

    --tpr-dark-blue:#004459;
    --tpr-blue: #007397;
    --tpr-light-blue:#92d4e9;

    --default-font-size: 1.6rem;

    /**** grid****/
    --grid-width: 114rem;
    --gutter-vertical: 8rem;
    --gutter-horizontal: 6rem;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    box-sizing: border-box; 
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }


  .tpr-article__title {
        font-size: 1.8rem;
        text-align: center;
    }
    .tpr-article__paragraph {
        text-align: center;
        padding: 3px 0;
    }
    .tpr-article__link {
        color: $tpr-dark-blue;
        &:hover {
            color: $tpr-light-blue;  
        }
    }

`;

export default GlobalStyles;
