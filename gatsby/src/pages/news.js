import React from 'react';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

export default function NewsPage() {
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          We’re always working on something exciting – here’s a glimpse of what
          we’ve been up to lately.
        </h1>
      </BlueBarHeader>
      <main>
        <h2>News page</h2>
      </main>
    </Layout>
  );
}
