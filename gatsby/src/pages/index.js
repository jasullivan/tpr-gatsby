import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import styled from 'styled-components';
import HomepageLayout from '../components/HomepageLayout';

const CarouselStyles = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 10px auto 25px;
  text-align: center;
  @media (min-width: 1100px) {
    margin: 10px auto 15px;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export default function HomePage() {
  return (
    <HomepageLayout>
      <CarouselStyles>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/800/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?grayscale"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselStyles>
      <Container className="pb-5 pt-md-4">
        <Heading>
          Intelligent communications campaigns for the creative industries and
          projects with a social impact
        </Heading>
      </Container>
    </HomepageLayout>
  );
}
