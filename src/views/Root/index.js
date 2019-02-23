import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';
import Homepage from 'views/Homepage';
import Developers from 'views/Developers';
import NoMatch from 'views/NoMatch';
import { rootRoute, developersRoute } from 'constants/routes';

const Root = () => (
  <Fragment>
    <Helmet>
      <title>React Contentful Pokedex</title>
      <meta name="description" content="Pokedex built on top of React with Contenful CMS!"/>
    </Helmet>
    <BrowserRouter>
      <Fragment>
      <Navigation/>
        <Switch>
          <Route exact={true} path={rootRoute} component={Homepage} />
          <Route exact={true} path={developersRoute} component={Developers} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Fragment>
);

export default Root;
