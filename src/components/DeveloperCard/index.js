import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { developerType } from '../../constants/propTypes';
import { getDeveloperRoute } from '../../constants/routes';

class DeveloperCard extends Component {
  render () {
    const { developer: {
      id,
      photo,
      name,
      level,
      type,
      technologies,
    } } = this.props;

    return (
      <div className='card'>
        <img src={photo.url} className='card-img-top' alt={photo.title} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted font-weight-light">{`${level} ${type} Developer`}</h6>
          <p className='card-text'>
            { technologies.map(technology => technology.name).join(', ') }
          </p>
          <Link to={getDeveloperRoute(id)} className='btn btn-primary'>Go somewhere</Link>
        </div>
      </div>
    );
  }
}

DeveloperCard.propTypes = {
  developer: developerType
};

export default DeveloperCard;