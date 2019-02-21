import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Root = () => (
  <Fragment>
    <Helmet>
      <title>React Contentful Pokedex</title>
      <meta name="description" content="Pokedex built on top of React with Contenful CMS!"/>
    </Helmet>
    <h1>Hello</h1>
  </Fragment>
);

export default Root;
