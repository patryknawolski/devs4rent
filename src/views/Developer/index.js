import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeveloper } from '../../ducks/developer/actions';
import { developersRoute } from 'constants/routes';

class Developer extends Component {
  componentDidMount() {
    const { match, getDeveloper, developers } = this.props;
    const { id } = match.params;
    const isDeveloperLoaded = !!developers.find(developer => developer.id === id);

    if(!isDeveloperLoaded) {
      getDeveloper(match.params.id);
    }
  }

  render() {
    const { developers, match } = this.props;
    const loadedDeveloper = developers.find(developer => developer.id === match.params.id);

    if (!loadedDeveloper) {
      return null;
    };

    const { name, photo, description, level, type, technologies } = loadedDeveloper;

    return (
      <div className="container mt-5">
        <Link className="btn btn-secondary mb-3" to={developersRoute}>Back to developers</Link>
        <div className="media">
          <img src={photo.url} className="mr-3" alt={photo.title}/>
          <div className="media-body">
            <h2 className="mt-0">{name}</h2>
            <h5 className="text-muted font-weight-light">{`${level} ${type} Developer`}</h5>
            <p>{description}</p>
            <p className="">{technologies.map(technology => technology.name).join(', ')}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  developers: state.developers
});

const mapDispatchToProps = {
  getDeveloper
};

export default connect(mapStateToProps, mapDispatchToProps)(Developer);