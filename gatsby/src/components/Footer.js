import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const FooterStyles = styled.div`
color: white;
  .tpr-footer {
  }
  .tpr-footer__content {
        text-align: center;
  }
  .tpr-footer--left {
            text-align: center;
            padding-top: 0;
            
        }
    
        .tpr-footer__logo-main {
        max-width: 5rem;
    }
    .tpr-footer__tel-link {
        color: $color-white;
        font-size: $default-font-size;;
    }
}
`;

export default function Footer() {
  return (
    <footer>
      <Container fluid className="px-0 bg-dark">
        <FooterStyles>
          <div className="row bg-dark m-0">
            <div className="container">
              <div className="row">
                <div className="order-lg-2 col-12 col-lg-6 col-xl-4">
                  <div className="tpr-footer p-5 text-center">
                    <div className="tpr-footer__content">
                      <img
                        src="dist/img/logos/logo_white.png"
                        alt=""
                        className="tpr-footer__logo-main"
                      />
                      <p className="text-center px-5 pt-3">Highgate, London</p>
                      <Link
                        to="tel:4402083477020"
                        className="text-center tpr-footer__tel-link"
                      >
                        +44 0208 347 7020
                      </Link>
                      <p className="pt-5">tpr media consultants</p>
                    </div>
                  </div>
                </div>
                <div className="order-lg-1 col-12 col-lg-3 col-xl-4">
                  <div className="tpr-footer p-5">
                    <div className="tpr-footer__content--left">
                      <img src="dist/img/logos/cipr_small.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FooterStyles>
      </Container>
    </footer>
  );
}
