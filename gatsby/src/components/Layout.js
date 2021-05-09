import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Navigation from './Navigation';
import Footer from './Footer';
import TprGlobalStyles from '../styles/TprGlobalStyles';
import Typography from '../styles/TprTypography';

const ContentStyles = styled.div`
  background: white;
  ${'' /* padding: 2rem; */}
`;

const InnerContentStyles = styled.div`
  main {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export default function Layout({ children }) {
  return (
    <div>
      <TprGlobalStyles />
      <Typography />
      <ContentStyles>
        <Navigation />
        <InnerContentStyles>{children}</InnerContentStyles>
        <Footer />
      </ContentStyles>
    </div>
  );
}
