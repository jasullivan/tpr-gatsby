import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
// import PeopleList from '../components/PeopleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Layout from '../components/Layout';
// import Modal from '../components/Modal';
import BlueBarHeader from '../components/BlueBarHeader';

export default function AboutPage({ data }) {
  // const people = data;
  console.log(data.people.nodes[0].name);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          Delivering media relations, event management and strategic consultancy
          to branding.
        </h1>
        <p className="blue-header__content">
          tpr media is a London-based communications agency committed to
          creating intelligent campaigns for the creative industries and
          projects with a social impact. We are passionate about compelling
          story telling and love to stimulate conversation and debate, offering
          profile and positioning that sets our clients apart from the crowd.
        </p>
      </BlueBarHeader>
      <main>
        <h2>{data.people.nodes[0].name}</h2>
        <h3>{data.people.nodes[0].jobTitle}</h3>
        <div>Employees with modal</div>
        <Container>
          <Row className="px-5 pt-5 justify-content-md-center">
            <Col sm={4} className="px-2 text-center">
              <Button variant="primary" onClick={handleShow}>
                {data.people.nodes[0].name}
              </Button>
            </Col>
            <Col sm={4} className="px-2 text-center">
              <Button variant="primary" onClick={handleShow}>
                {data.people.nodes[0].name}
              </Button>
            </Col>
            <Col sm={4} className="px-2 text-center">
              <Button variant="primary" onClick={handleShow}>
                {data.people.nodes[0].name}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={11} className="mx-auto mt-3">
              <p className="text-center">
                Our contacts book is our strongest asset. We have extensive
                knowledge of the media industries and strong, meaningful
                relationships with influential journalists across consumer
                print, TV and radio, trade press and online. We've spent nearly
                two decades identifying and building connections with the most
                talented and trusted writers and broadcasters in the UK and
                overseas and the high quality of the work we promote means that
                journalists are highly receptive to our projects.
              </p>
              <p className="text-center pt-3">
                Alongside media relations, our team has the experience and
                expertise to support your project with a wide range of marketing
                tools:
              </p>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col md={4} className="ml-auto">
              <ul className="text-center py-3 pl-0">
                <li>PR consulting</li>
                <li>Marketing strategy</li>
                <li>Marketing communication</li>
                <li>Profile building</li>
                <li>Issue &amp; crisis management</li>
                <li>Media training</li>
                <li>Event planning and management</li>
                <li>Client representation</li>
                <li>Internal communications</li>
              </ul>
            </Col>
            <Col md={4} className="mr-auto">
              <ul className="text-center py-3 pl-0">
                <li>PR consulting</li>
                <li>Marketing strategy</li>
                <li>Marketing communication</li>
                <li>Profile building</li>
                <li>Issue &amp; crisis management</li>
                <li>Media training</li>
                <li>Event planning and management</li>
                <li>Client representation</li>
                <li>Internal communications</li>
              </ul>
            </Col>
          </Row>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </main>
    </Layout>
  );
}

// query is not a special name - can be called anything
export const query = graphql`
  query PeopleQuery {
    people: allSanityPerson {
      nodes {
        name
        jobTitle
        description
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
