import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/ProjectList';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

export default function ProjectsPage({ data }) {
  // console.log(data.project.nodes);
  // console.log(data.project.nodes[1].slug.current);
  const projects = data.project.nodes;
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          We believe that every project is special and that’s why we create
          bespoke, tailored campaigns.
        </h1>
        <p className="blue-header__content">
          From targeted publicity for film and programme launches, to corporate
          retainers from major international brands, we work closely with our
          clients to deliver the right campaign to support their business goals.
          Whether it’s driving audience figures or raising reputation and
          business profile, we provide creative, intelligent and effective
          communication campaigns that get noticed.
        </p>
      </BlueBarHeader>
      <main>
        <ProjectList projects={projects} />
      </main>
    </Layout>
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
            fluid(maxWidth: 550) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
