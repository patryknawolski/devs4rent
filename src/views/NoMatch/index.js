import React, { Fragment } from 'react';

const NoMatch = ({ location }) => (
  <Fragment>
    <h1>Sorry, there's no route like <code>{location.pathname}</code></h1>
  </Fragment>
);

export default NoMatch;