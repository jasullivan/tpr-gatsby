import React from 'react';
import { graphql } from 'gatsby';
// import PeopleList from '../components/PeopleList';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

export default function AboutPage({ data }) {
  // const people = data;
  console.log(data.people.nodes[0].name);
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
