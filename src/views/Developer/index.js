import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDeveloper } from '../../ducks/developers/actions';
import { getPostsByDeveloperId } from '../../ducks/posts/actions';
import PostTeaser from '../../components/PostTeaser';

class Developer extends Component {
  componentDidMount() {
    const { match, getDeveloper, developers, getPostsByDeveloperId } = this.props;
    const { id } = match.params;
    const isDeveloperLoaded = !!developers.find(developer => developer.id === id);

    getPostsByDeveloperId(id);

    if(!isDeveloperLoaded) {
      getDeveloper(match.params.id);
    }
  }

  render() {
    const { developers, posts, match } = this.props;
    const { id } =  match.params;
    const developer = developers.find(developer => developer.id === id);
    const developersPosts = posts.filter(post => post.author.id === id);

    if (!developer) {
      return null;
    };

    const { name, photo, description, level, type, technologies } = developer;

    return (
      <div className="container mt-5">
        <div className="media">
          <img src={photo.url} className="mr-3" alt={photo.title}/>
          <div className="media-body">
            <h2 className="mt-0">{name}</h2>
            <h5 className="text-muted font-weight-light">{`${level} ${type} Developer`}</h5>
            <p>{description}</p>
            <p>{technologies.map(technology => technology.name).join(', ')}</p>
            { developersPosts.length > 0 &&
              <div>
                <h4>{name}'s posts</h4>
                {
                  developersPosts.map(post => 
                    <PostTeaser post={post}/>
                  )
                }
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  developers: state.developers,
  posts: state.posts
});

const mapDispatchToProps = {
  getDeveloper,
  getPostsByDeveloperId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Developer);