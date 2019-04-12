import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showComments } from '../actions/postActions';

class Post extends Component {
  handleClick = () => {
    this.props.showComments(this.props.post.id);
  }
  render() {
    const postProps = this.props.post;
    //коментарии
    const commentList = postProps.comments.length
      ? (
        postProps.comments.map(comment => {
          return (
            <div key={comment.id}>
              <span>{comment.body}</span>
            </div>
          )
        })
      )
      : (
        <div>Нет комментариев</div>
      );

    //пост
    const post = postProps
      ? (
        <div>
          <h4>{postProps.title}</h4>
          <p>{postProps.body}</p>
          <button onClick={this.handleClick}>
            Открыть комментарий
          </button>
          {this.props.isOpen ? <div>{commentList}</div> : null}
        </div>
      )
      : (
        <div>Нет статьи</div>
      );

    return (
      <div>
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id),
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showComments: (id) => dispatch(showComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
