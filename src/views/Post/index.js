import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import { getPost } from '../../ducks/posts/actions';
import { getDeveloperRoute } from '../../constants/routes';

class Developer extends Component {
  componentDidMount() {
    const { match, getPost, posts } = this.props;
    const { id } = match.params;
    const isPostLoaded = !!posts.find(post => post.id === id);

    if(!isPostLoaded) {
      getPost(match.params.id);
    }
  }

  render() {
    const { posts, match } = this.props;
    const { id } =  match.params;
    const post = posts.find(post => post.id === id);

    if (!post) {
      return null;
    };

    const { title, content, author } = post;

    return (
      <div className="container mt-5">
        <h1>{title} by <Link className="small" to={getDeveloperRoute(author.id)}>{author.name}</Link></h1>
        <Markdown source={content}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  getPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Developer);