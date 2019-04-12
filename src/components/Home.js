import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length
      ? (
        posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={'/' + post.id}>
                <span>{post.title}</span>
              </Link>
            </div>
          )
        })
      )
      : (
        <div>Нет заголовков</div>
      );

    return (
      <div>
        <h4>Список заголовков статей</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)