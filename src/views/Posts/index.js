import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getPosts } from '../../ducks/posts/actions';
import { postsType } from '../../constants/propTypes';
import { getDeveloperRoute } from '../../constants/routes';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    
    return (
      <div className="container">
        <div className="jumbotron my-5">
          <h1 className="display-4">Posts</h1>
          <p className="lead">This is a list of educational posts written by our developers.</p>
        </div>
        { posts.map(post =>
          <div key={post.id} className="media">
            <div className="media-body">
              <h5 className="mb-0">
                {post.title} <span className="small">by</span> <Link to={getDeveloperRoute(post.author.id)}>{post.author.name}</Link>
              </h5>
              <p className="text-muted small">{moment(post.updatedAt).fromNow()}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: postsType,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { posts } = state;

  return {
    posts,
  };
};

const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);