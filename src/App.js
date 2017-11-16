import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './TweetBox';

class App extends Component {
  constructor(props){

  super(props);
  this.state = {
    tweets: ['Hello World', 'CoderSchool is the best!'],
    charsRemaining: 140
    }
  }

  handleTweet(tweet) {
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    })
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
          <TweetBox prompt="What's your status?" handleTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
          { this.state.tweets.map( tweet =>
            (<p> {tweet} </p>)
          )}
        </div>
      </div>
    );
  }
}

export default App;
