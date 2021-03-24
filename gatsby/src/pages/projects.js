import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/ProjectList';

export default function ProjectsPage({ data }) {
  console.log(data.project.nodes);
  console.log(data.project.nodes[1].slug.current);
  const projects = data.project.nodes;
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}

// query is not a special name - can be called anything
export const query = graphql`
  query ProjectQuery {
    project: allSanityProject {
      nodes {
        name
        id
        slug {
          current
        }
        categories {
          id
          name
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
