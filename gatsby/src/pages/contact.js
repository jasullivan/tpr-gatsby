import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

const StatementText = styled.ul`
  li {
    font-size: 2rem;
    text-align: center;
    @media (min-width: 992px) {
      font-size: 2.4rem;
    }
  }
  .tpr-statement-text--highlight {
    color: var(--tpr-blue);
  }
  .tpr-statement-text__tel {
    padding-top: 1rem;
    color: var(--color-vlight-grey);
  }
`;

export default function ContactPage() {
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          We want to help you amplify your message.
        </h1>
        <p className="blue-header__content">
          So get in touch if you’ve got a project that we could help with. We
          enjoy meeting new people and we’re always happy to chat ideas through
          over a coffee.
        </p>
      </BlueBarHeader>
      <main>
        <Container>
          <Row>
            <Col md={5} className="mx-auto py-5 mb-5">
              <StatementText>
                <li>
                  <span className="tpr-statement-text--highlight">
                    tpr media
                  </span>{' '}
                  consultants
                </li>
                <li>3 Muswell Hill Road</li>
                <li>London</li>
                <li>N6 5FJ</li>
                <li className="tpr-statement-text__tel">
                  <Link to="tel:02083477020">+44 (0) 20 8347 7020</Link>
                </li>
                <li>
                  <Link to="mailto:sophie@tpr-media.com">
                    sophie@tpr-media.com
                  </Link>
                </li>
              </StatementText>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
