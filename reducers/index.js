import { combineReducers } from 'redux';
import {
  SOME_CONSTANT // Constants
} from '../actions';

const initial_state = {
  this_is_true: true
};

export default function Reducer (state = initial_state, action) {
  switch (action.type) {
    case SOME_CONSTANT:
      return {
        ...state
      };

    default:
      return state;
  }
}
