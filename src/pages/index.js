import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Main, About, History, Projects, Contact } from '@components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Main />
    <About />
    <History />
    <Projects />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.string.isRequired,
};

export default IndexPage;
