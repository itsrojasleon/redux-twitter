import { RECEIVE_USERS } from './actionTypes'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}