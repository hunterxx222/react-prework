import React, { Component } from "react";

export default class Tweet extends Component {

  render() {
    const tweet = this.props.tweet;
    return (
      <div>
        {tweet.text}
        <br />
        <i>{Math.round(Date.now()/1000) - tweet.time} seconds ago</i>
        <br />
        <a href="#" onClick={() => this.props.handleLike(tweet)}>
          {tweet.liked ? "Like" : "Unlike"} Post&nbsp;&nbsp;
        </a>
        <button
          className="btn btn-danger btn-sm"
          href="#"
          onClick={() => this.props.deleteTweet(tweet)}
        >
          Delete
        </button>
      </div>
    );
  }
}
