import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation';
import Homepage from 'views/Homepage';
import Developers from 'views/Developers';
import NoMatch from 'views/NoMatch';
import store from 'ducks/store';
import { rootRoute, developersRoute } from 'constants/routes';

const Root = () => (
  <Provider store={store}>
    <Helmet>
      <title>devs4rent</title>
      <meta name="description" content="Built on top of React with Contenful CMS!"/>
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
  </Provider>
);

export default Root;
