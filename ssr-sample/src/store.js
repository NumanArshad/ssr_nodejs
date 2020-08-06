import rootReducer from './myindex'
import {createStore} from 'redux'
const store=createStore(rootReducer)
export default store