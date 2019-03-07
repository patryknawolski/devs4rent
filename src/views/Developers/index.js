import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDevelopers } from '../../ducks/developers/actions';
import { developersType } from '../../constants/propTypes';
import DeveloperCard from '../../components/DeveloperCard';

class Developers extends Component {
  componentDidMount() {
    this.props.getDevelopers();
  }

  render() {
    const { developers } = this.props;
    
    return (
      <div className="container">
        <div className="jumbotron my-5">
          <h1 className="display-4">Developers</h1>
          <p className="lead">This is a list of our currently available developers.</p>
        </div>
        { developers.length &&
          <div className="card-columns">
            { developers.map(developer =>
              <DeveloperCard key={developer.id} developer={developer} />
            )}
          </div>
        }
      </div>
    );
  }
}

Developers.propTypes = {
  developers: developersType,
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