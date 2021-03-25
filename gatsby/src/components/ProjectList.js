import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
`;

const ProjectStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleProject({ project }) {
  return (
    <ProjectStyles>
      <Link to={`/project/${project.slug.current}`}>
        <h2>
          <span className="mark">{project.name}</span>
        </h2>
      </Link>
      <p>{project.categories.map((category) => category.name).join(', ')}</p>
      <Img fluid={project.image.asset.fluid} alt={project.name} />
    </ProjectStyles>
  );
}

export default function ProjectList({ projects }) {
  return (
    <ProjectGridStyles>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ProjectGridStyles>
  );
}
