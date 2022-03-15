import {createStore} from 'redux'
import reducer from './reducer'
import {INITIAL_STATE} from './initialState'

const store = createStore(reducer, INITIAL_STATE)

export default store