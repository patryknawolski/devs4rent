import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getDeveloperRoute, getPostRoute } from '../../constants/routes';
import { postType } from '../../constants/propTypes';

class PostTeaser extends Component {
  render () {
    const { post } = this.props;
    const { id, author, updatedAt, title } = post;

    return (
      <div className="media">
        <div className="media-body">
          <h5 className="mb-0">
          <Link to={getPostRoute(id)}>{title}</Link> <span className="small">by</span> { author && <Link to={getDeveloperRoute(author.id)}>{author.name}</Link> }
          </h5>
          <p className="text-muted small">{moment(updatedAt).fromNow()}</p>
        </div>
      </div>
    );
  }
}

PostTeaser.propTypes = {
  post: postType
};

export default PostTeaser;