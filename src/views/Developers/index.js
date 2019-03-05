import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDevelopers } from '../../ducks/developers/actions';

class Developers extends Component {
  componentDidMount() {
    this.props.getDevelopers();
  }

  render() {
    return (
      <Fragment>
        <h1>Hello, this is Developers page!</h1>
        { this.props.developers.map(({fields}, i) =>
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        )}
      </Fragment>
    );
  }
}

Developers.propTypes = {
  developers: PropTypes.arrayOf(
    PropTypes.shape({

    })
  ),
  getDevelopers: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { developers } = state;

  return {
    developers,
  };
};

const mapDispatchToProps = {
  getDevelopers
};

export default connect(mapStateToProps, mapDispatchToProps)(Developers);