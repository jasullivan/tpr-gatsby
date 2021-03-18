import { createGlobalStyle } from 'styled-components';

// import font from '../assets/fonts/frenchfries.woff';

const TprTypography = createGlobalStyle`
  html {
    font-family: 'Open Sans', Arial, sans-serif;
    color: var(--tpr-color-primary);
  }

  p, li {
    font-size: var(--default-font-size);
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--tpr-color-primary);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  button, .button {
   font-family: 'Open Sans', Arial, sans-serif; 
   font-size: 1.6rem;
  }
  a, button {
      color: var(--tpr-color-primary);
      &:hover {
          color: var(--tpr-light-blue);
      }
      &:active {
          color: var(--tpr-light-blue);
      }
      &.is-checked {
          color: var(--tpr-light-blue);
      }
  }
  a:hover {
      text-decoration: none;
  }
  ul {
      list-style: none;
  }
`;

export default TprTypography;
