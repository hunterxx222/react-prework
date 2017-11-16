import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './TweetBox';
import Tweet from "./Tweet";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: 'Hello',
          liked: true,
          charsRemaining: 140,
        },
        {
          text: 'World',
          liked: false,
          charsRemaining: 140,
        },
      ],
    };
  }

  handleTweet(tweetText) {
    const tweetObj = {
      text: tweetText,
      liked: false,
    };
    this.setState({
      tweets: this.state.tweets.concat(tweetObj),
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t;
    });

    this.setState({
      tweets
    })
  }

  deleteTweet(tweet) {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to .
        </p>
        <div>
          <TweetBox
            prompt="What's your status?"
            handleTweet={this.handleTweet.bind(this)}
          />
        </div>
        <div>{this.state.tweets.map(tweet => <Tweet tweet={tweet} handleLike={this.handleLike.bind(this)} deleteTweet={this.deleteTweet.bind(this)} />)}</div>
      </div>
    );
  }
}
