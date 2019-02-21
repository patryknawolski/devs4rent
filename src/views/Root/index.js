import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';

import { rootRoute } from 'constants/routes';

const Root = () => (
  <Fragment>
    <Helmet>
      <title>React Contentful Pokedex</title>
      <meta name="description" content="Pokedex built on top of React with Contenful CMS!"/>
    </Helmet>
    <BrowserRouter>
      <Route path={rootRoute} render={() => (
        <h1>Hello</h1>    
      )} />
    </BrowserRouter>
  </Fragment>
);

export default Root;
