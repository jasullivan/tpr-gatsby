import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

const BlueBarHeaderStyles = styled.header`
    background: var(--tpr-light-blue);
    margin: 0 -1.5rem;
    color: $tpr-color-primary;
    padding: 3rem;
    @media (min-width: 1200px) {
        padding: 3rem 0;
    }
}
.blue-header__title {
    font-size: 2rem;  
    line-height: 1.4;
    margin: 0 auto; 
    text-align: center;
    max-width: 110rem;
    font-weight: 400;
    ${'' /* &--no-content {
    padding-bottom: 0rem;
    } */}
}
.blue-header__content {
    display: none;
    @media (min-width: 1200px) {
        font-weight: 300;
        display: block;
        font-size: 2rem;  
        line-height: 1.4;
        margin: 0 auto; 
        text-align: center;
        max-width: 110rem;
    }
}

`;

export default function BlueBarHeader({ children }) {
  console.log(children);
  return (
    <>
      <BlueBarHeaderStyles>{children}</BlueBarHeaderStyles>
    </>
  );
}
