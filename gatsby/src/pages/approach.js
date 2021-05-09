import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

const PageContentStyles = styled.section`
  .tpr-article-content {
    padding: 3rem 0 3rem;
  }
  /* color: $color-light-grey; */
  .tpr-article-content__image {
    padding-bottom: 2rem;
    width: 100%;
    max-width: 825px;
    ${'' /* &--nopad {
      padding-bottom: 0;
    } */}
  }
  .tpr-article-content__img-caption {
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 1rem;
    font-style: italic;
  }
  .tpr-article-content__subtitle {
    font-size: 2rem;
    padding: 1rem 0 0.5rem;
    text-align: center;
  }
  .tpr-article-content__details {
    font-size: $default-font-size;
    text-align: center;
    padding-bottom: 0.25rem;
  }
  .tpr-article-content__paragraph {
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 1rem;
  }
  .tpr-article-content__link {
    color: $tpr-blue;
    &:hover {
      color: $tpr-light-blue;
    }
  }
  /* you tube and google map styling */
  iframe {
    width: 100%;
  }
`;

export default function ApproachPage() {
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          The breadth of our experience – working across news, arts and culture
          – means clients get a specialist service.
        </h1>
        <p className="blue-header__content">
          With a proven track record over nearly 20 years and the endorsements
          to back it up, we’re small enough to be passionate, and well connected
          enough to deliver big results. If you work with us you can expect
          commitment, creativity and outstanding communication delivered with
          energy and enthusiasm.
        </p>
      </BlueBarHeader>
      <main>
        <Container className="mb-5">
          <Row className="pt-5 pb-3">
            <Col xs={11} className="mx-auto">
              <PageContentStyles className="tpr-article">
                <h2 className="tpr-article__title">Strategy</h2>
                <p className="tpr-article__paragraph">
                  No two businesses are the same and we believe in a personal
                  approach. At the start of any project, we’ll ask you lots of
                  questions. We’ll then work with you to define a clear strategy
                  identifying your business aims, campaign objectives, target
                  audience and challenges. From this point we’ll outline what we
                  could do to support you and propose an activity plan. We’ll
                  also let you know exactly what we need from you to maximise
                  the impact of the campaign, and what the results might look
                  like.
                </p>
              </PageContentStyles>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xs={11} className="mx-auto">
              <PageContentStyles className="tpr-article">
                <h2 className="tpr-article__title">Storytelling</h2>
                <p className="tpr-article__paragraph">
                  Once you’re happy with our strategy, we’ll define and simplify
                  your key messages. We’ll create great stories to communicate
                  your messages as clearly as possible and we’ll tell these
                  stories in exciting and engaging ways.
                </p>
              </PageContentStyles>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xs={11} className="mx-auto">
              <PageContentStyles className="tpr-article">
                <h2 className="tpr-article__title">Dynamic Media Marketing</h2>
                <p className="tpr-article__paragraph">
                  We understand the media landscape. In addition to network of
                  contacts built over two decades, we have access to a
                  state-of-the-art media database which allows us to find the
                  right people. We’ll work out where your audience are and how
                  to reach them. We’ll look at what they want, and we’ll present
                  your project to them in a way that grabs their attention.
                </p>
              </PageContentStyles>
            </Col>
          </Row>
          <Row className="py-3">
            <Col xs={11} className="mx-auto">
              <PageContentStyles className="tpr-article">
                <h2 className="tpr-article__title">Analysis</h2>
                <p className="tpr-article__paragraph">
                  We believe it’s important to learn from every campaign and to
                  evaluate every project. We’ll closely monitor and analyse the
                  impact of our campaigns and give you analysis of the successes
                  and achievements alongside media cuttings, statistics and
                  graphs. If we faced any challenges, we’ll be honest with you,
                  making constructive suggestions that you can use to make your
                  company even better.
                </p>
              </PageContentStyles>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
