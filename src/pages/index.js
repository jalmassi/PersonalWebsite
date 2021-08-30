import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Main, About, Jobs, Featured, Projects, Contact } from '@components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Main />
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
