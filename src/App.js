import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>React Contentful Pokedex</title>
          <meta name="description" content="Pokedex built on top of React with Contenful CMS!"/>
        </Helmet>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
