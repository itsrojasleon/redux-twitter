import { RECEIVE_TWEETS } from '../actions/actionTypes'

export default function tweets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    default:
      return state
  }
}