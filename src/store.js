import { createStore } from 'redux'

import reducer from './reducers'
import composeEnhancer from './middlewares'

const store = createStore(
  reducer,
  composeEnhancer
)
export default store