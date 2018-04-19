import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { tweets } = this.props
    return (
      <div>
        <ul>
          {tweets.map(tweet => (
            <li key={tweet}>{tweet}</li>
          ))}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const tweets = Object.keys(state.tweets)
  return {
    tweets
  }
}
export default connect(mapStateToProps  )(Dashboard)