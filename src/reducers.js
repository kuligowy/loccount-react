import { combineReducers } from "redux";
import {
  FETCHED_LOCCOUNT_ENTRIE_REQUEST,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS,
  LOCCOUNT_DESELECTED,
  LOCCOUNT_SELECTED
} from "./actions";

function loccountEntries(state = {}, action) {
  switch (action.type) {
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST:
      return Object.assign({}, state, {
        loccountEntries: { ...state.loccountEntries, isFetching: true }
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        loccountEntries: {
          ...state.loccountEntries,
          isFetching: false,
          data: action.loccountEntries
        }
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED:
      return Object.assign({}, state, {
        loccountEntries: { ...state.loccountEntries, isFetching: false }
      });
    default:
      return state;
  }
}

function loccount(state = {}, action) {
  switch (action.type) {
    case LOCCOUNT_SELECTED:
      return Object.assign({}, state, {
        loccounts: [...state.loccounts, action.loccount]
      });
    default:
      return state;
  }
}

const loccountApp = combineReducers({
  loccountEntries,
  loccount
});

export default loccountApp;
