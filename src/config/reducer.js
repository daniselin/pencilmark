import {combineReducers} from 'redux'
import {connectRouter} from "connected-react-router";
import user from '../app/user';
import buildPuzzle from '../app/build-puzzle';
import solvePuzzle from '../app/solve-puzzle';
import token from '../app/token';
import messages from '../app/messages';
import form from '../app/form';
import profile from '../app/profile';
import modal from '../app/modal';
import timer from '../app/timer';
import windowSize, {REDUCER_KEY} from 'redux-windowsize';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  token,
  buildPuzzle,
  messages,
  form,
  profile,
  solvePuzzle,
  modal,
  timer,
  [REDUCER_KEY]: windowSize,
})

export default createRootReducer;