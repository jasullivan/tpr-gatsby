import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Navigation from './Navigation';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/TprTypography';
import 'bootstrap/dist/css/bootstrap.min.css';

const SiteBorderStyles = styled.div`
  margin: 0rem auto 4rem auto;
  border: 5px solid white;
  @media (max-width: 1200px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  ${'' /* padding: 2rem; */}
`;

const InnerContentStyles = styled.div`
  ${'' /* max-width: 120rem; */}
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      {/* <SiteBorderStyles> */}
      <ContentStyles>
        <Navigation />
        <InnerContentStyles>{children}</InnerContentStyles>
        <Footer />
      </ContentStyles>
    </div>
  );
}
