import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
// import Logo from './Logo';

const TprNavStyles = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.5rem;
  .navbar {
    ${'' /* background: red; */}
  }
  .nav-bar-toggle {
    margin-bottom: 0.5rem;
  }
  .tpr-nav__social-icons {
    position: absolute;
    right: 8rem;
    top: 3.5rem;
    display: flex;
    justify-items: flex-end;
    @media (min-width: 768px) {
      right: 2rem;
      top: 3.5rem;
    }
  }
  .icon {
    padding: 0 4px;
    &:hover {
      color: $tpr-light-blue;
      cursor: pointer;
    }
  }
`;

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
  padding: 1.5rem;
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

export default function TprNav() {
  return (
    <TprNavStyles>
      <Navbar expand="md" className="align-items-end">
        {/* <Navbar.Brand> */}
        <Link to="/">
          <img src={logo} alt="tpr media logo" />
        </Link>
        {/* </Navbar.Brand> */}
        <div className="tpr-nav__social-icons align-items-end">
          <Link to="/about" className="icon" activeClassName="active">
            test
          </Link>
          <Link to="/about" className="icon" activeClassName="active">
            test
          </Link>
          <Link to="/about" className="icon" activeClassName="active">
            test
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          className="navBarToggle"
        />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="mr-auto pl-5">
            <Nav.Item as="li">
              <Link
                to="/about"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/projects"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/clients"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                Clients
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/approach"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                Approach
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/news"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                News
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/contact"
                className="nav-link  pl-4"
                activeClassName="active"
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </TprNavStyles>
  );
}
