import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { other } = this.props
    console.log(other)
    return (
      <div>
        <ul>
          {other.map(tweet => (
            <li key={tweet.id}>
              <h2>{tweet.author}</h2>
              <p>{tweet.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
function mapStateToProps({ users, tweets, authedUser }) {
  const data = users[authedUser].tweets

  const other = data.map(id => tweets[id])


  return {
    other
  }
}
export default connect(mapStateToProps  )(Dashboard)