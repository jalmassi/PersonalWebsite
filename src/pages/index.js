import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Hero />
    <About />
    <Jobs />
    <Featured />
    <Projects />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
