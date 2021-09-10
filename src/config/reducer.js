import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router";
import user from '../app/user';
import buildPuzzle from '../app/build-puzzle';
import token from '../app/token';
import messages from '../app/messages';
import form from '../app/form';
import windowSize, {REDUCER_KEY} from 'redux-windowsize';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  token,
  buildPuzzle,
  messages,
  form,
  [REDUCER_KEY]: windowSize,
})

export default createRootReducer;