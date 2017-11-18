import React, { Component } from "react";

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange(text) {
    this.setState({
      text,
      charsRemaining: 140 - text.length
    });
  }

  render() {
    return (
      <div>
        <input className="form-control col-sm-4 ml-auto mr-auto"
          type="text"
          placeholder={this.props.prompt}
          onChange={e => this.handleChange(e.target.value)}
        />
        <p>{this.state.charsRemaining}</p>
        <button className="btn btn-primary"
          onClick={() => this.props.handleTweet(this.state.text)}
          disabled={this.state.charsRemaining < 0}
        >
          Tweet
        </button>
      </div>
    );
  }
}

export default TweetBox;
