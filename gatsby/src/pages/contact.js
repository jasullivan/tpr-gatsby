import React from 'react';
import Layout from '../components/Layout';
import BlueBarHeader from '../components/BlueBarHeader';

export default function ContactPage() {
  return (
    <Layout>
      <BlueBarHeader>
        <h1 className="blue-header__title">
          We want to help you amplify your message.
        </h1>
        <p className="blue-header__content">
          So get in touch if you’ve got a project that we could help with. We
          enjoy meeting new people and we’re always happy to chat ideas through
          over a coffee.
        </p>
      </BlueBarHeader>
      <main>
        <h2>Contact page</h2>
      </main>
    </Layout>
  );
}
