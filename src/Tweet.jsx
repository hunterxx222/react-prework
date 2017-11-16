import React, { Component } from 'react';

export default class Tweet extends Component {
  render() {
    const tweet = this.props.tweet;
    return (
      <div>
        {tweet.text}
        <br />
        <a href="#" onClick={() => this.props.handleLike(tweet)}>
          { tweet.liked ? 'Like' : 'Unlike' } Post
        </a>
        <button href="#" onClick={() => this.props.deleteTweet(tweet)}>Delete</button>
      </div>
    );
  }
}
