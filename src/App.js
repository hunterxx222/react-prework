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
          time: Math.round(Date.now()/1000)
        },
        {
          text: 'World',
          liked: false,
          charsRemaining: 140,
          time: Math.round(Date.now()/1000)-20
        },
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({ });  
  }

  handleTweet(tweetText) {
    const tweetObj = {
      text: tweetText,
      liked: false,
      time: Math.round(Date.now()/1000)
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
    let tweets = this.state.tweets
    this.state.tweets.map(t => {
      if (t.text == tweet.text) {
        tweets.splice(tweets.indexOf(t),1);
      }
    });
      this.setState({ tweets });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coderschool Prework</h1>
        </header>
        <p className="App-intro">
          This is a mini-twitter app that doesn't push anything to the cloud!
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
