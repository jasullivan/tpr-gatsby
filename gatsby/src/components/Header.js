import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
// import Logo from './Logo';

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 6.4rem;
    width: 5rem;
  }
  ul {
    margin: 0 auto;
    padding: 2.75rem 4rem 0;
    display: flex;
  }
  li {
    margin: 0 2rem;
  }
  a {
    font-size: 2.2rem;
    text-decoration: none;
    &:hover {
      color: var(--tpr-light-blue);
    }
  }
`;

const SocialNavStyles = styled.div`
  ul {
    margin: 0 auto;
    padding: 2.75rem 4rem 0;
    display: flex;
    flex-direction: row;
  }
  li {
    order: 1;
  }
  a {
    font-size: 2.2rem;
    text-decoration: none;
    &:hover {
      color: var(--tpr-light-blue);
    }
  }
`;

export default function Nav() {
  return (
    <HeaderStyles>
      <NavStyles>
        <Link to="/">
          <img src={logo} alt="tpr media logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/approach">Approach</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </NavStyles>
      <SocialNavStyles>
        <ul>
          <li>
            <Link to="/about">i</Link>
          </li>
          <li>
            <Link to="/projects">t</Link>
          </li>
          <li>
            <Link to="/clients">l</Link>
          </li>
        </ul>
      </SocialNavStyles>
    </HeaderStyles>
  );
}
