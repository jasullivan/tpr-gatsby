import React from 'react';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

export default function ClientsPage() {
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          Our clients include film and TV production companies, international
          broadcasters and NGOs as well as technology start-ups, from Tokyo to
          LA and Stockholm and Jakarta.
        </h1>
        <p className="blue-header__content">
          We have represented some of the world’s most influential and creative
          broadcast, media and arts organisations and we pride ourselves on
          having long-standing relationships with clients – many for over a
          decade. We’re never complacent and that’s because we love what we do.
          We hope it shines through in our work and what our clients say about
          us.
        </p>
      </BlueBarHeader>
      <main>
        <h2>Clients page</h2>
      </main>
    </Layout>
  );
}
