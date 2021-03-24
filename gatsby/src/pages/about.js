import React from 'react';
import { graphql } from 'gatsby';
// import PeopleList from '../components/PeopleList';

export default function AboutPage({ data }) {
  // const people = data;
  console.log(data.people.nodes[0].name);
  return (
    <>
      <h1>{data.people.nodes[0].name}</h1>
      <h2>{data.people.nodes[0].jobTitle}</h2>
    </>
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
