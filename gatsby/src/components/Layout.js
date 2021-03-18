import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../styles/TprGlobalStyles';
import Typography from '../styles/TprTypography';

const SiteBorderStyles = styled.div`
  margin: 0rem auto 4rem auto;
  ${'' /* margin-top: clamp(2rem, 10vw, 12rem); */}
  padding: 5px;
  ${'' /* padding: clamp(5px, 1vw, 25px); */}
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Header />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </div>
  );
}
