import {createStore, applyMiddleware} from 'redux'
import countReducer from './reducers/count_reducer'
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))