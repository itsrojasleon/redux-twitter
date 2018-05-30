import React, { Component } from 'react'
import { connect } from 'react-redux';
import Tweet from './tweet';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;
    return (
      <div>
        <ul>
          {tweetIds.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
function mapStateToProps({ tweets }) {
  const tweetIds = Object.keys(tweets)
    .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  return {
    tweetIds,
  }
}
export default connect(mapStateToProps  )(Dashboard)