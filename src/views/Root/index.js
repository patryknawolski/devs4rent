import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from 'views/Homepage';
import { rootRoute } from 'constants/routes';

const Root = () => (
  <Fragment>
    <Helmet>
      <title>React Contentful Pokedex</title>
      <meta name="description" content="Pokedex built on top of React with Contenful CMS!"/>
    </Helmet>
    <BrowserRouter>
      <Route path={rootRoute} render={Homepage} />
    </BrowserRouter>
  </Fragment>
);

export default Root;
