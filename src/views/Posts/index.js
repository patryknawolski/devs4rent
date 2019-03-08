import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostTeaser from '../../components/PostTeaser';
import { getPosts } from '../../ducks/posts/actions';
import { postsType } from '../../constants/propTypes';

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
          <PostTeaser key={post.id} post={post}/>
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