import { RECEIVE_TWEETS } from './actionTypes'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}