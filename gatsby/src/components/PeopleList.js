import React from 'react';
// import { Link } from 'gatsby';

function SinglePerson({ people }) {
  return (
    <div>
      {/* <Link to={`/about/${people.slug.current}`}>
        <h2>
          <span className="mark">{people.name}</span>
        </h2>
      </Link> */}
      <h2>{people.name}</h2>
    </div>
  );
}

export default function PeopleList({ people }) {
  return (
    <div>
      {people.map((person) => (
        <SinglePerson key={person.id} pizza={person} />
      ))}
    </div>
  );
}
