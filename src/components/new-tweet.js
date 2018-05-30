import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

class NewText extends Component {
  state = {
    term: '',
    toHome: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { term } = this.state;
    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(term, id));
    this.setState(() => ({
      term: '',
      toHome: id ? false : true,
    }));
  }
  handleChange = (e) => {
    const term = e.target.value;
    this.setState(() => ({
      term,
    }));
  }
  render() {
    const { term, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to='/' />
    }
    const tweetLeft = 280 - term.length;
    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={term}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={term === ''}>
              Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(NewText);
