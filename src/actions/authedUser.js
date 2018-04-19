import { SET_AUTHED_USER } from './actionTypes'

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}