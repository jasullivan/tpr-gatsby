import React from 'react';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

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
        <h2>Approach page</h2>
      </main>
    </Layout>
  );
}
