import { createStore, combineReducers, applyMiddleware } from 'redux'; //
import thunk from 'redux-thunk'; //

import techReducer from './tech/reducer';
import themeReducer from './theme/reducer'; ///
import usersReducer from './users/reducer'; ///


const reducers = combineReducers({
  tech: techReducer,
  theme: themeReducer, ///
  users: usersReducer, //
})

const store = createStore(reducers, applyMiddleware(thunk)); //

export default store;