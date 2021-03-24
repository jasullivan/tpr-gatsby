import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'

function SingleProject({ project }) {
  return (
    <div>
      <Link to={`/project/${project.slug.current}`}>
        <h2>
          <span className="mark">{project.name}</span>
        </h2>
        <p>{project.categories.map((category) => category.name).join(', ')}</p>
        <Img fluid={project.image.asset.fluid} />
      </Link>
    </div>
  );
}

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
}
