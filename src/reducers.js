import { combineReducers } from "redux";
import {
  FETCHED_LOCCOUNT_ENTRIE_REQUEST,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS,
  LOCCOUNT_DESELECTED,
  LOCCOUNT_SELECTED,
  FETCHED_LOCCOUNTS_REQUEST,
  FETCHED_LOCCOUNTS_REQUEST_SUCCESS,
  FETCHED_LOCCOUNTS_REQUEST_FAILED
} from "./actions";

function loccountEntries(
  state = {
    data: { data: [] },
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST:
      return Object.assign({}, state, {
        // loccountEntries: {
        ...state.loccountEntries,
        isFetching: true,
        data: { data: [] }
        // }
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        //loccountEntries: {
        ...state.loccountEntries,
        isFetching: false,
        data: action.loccountEntries
        //}
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED:
      return Object.assign({}, state, {
        // loccountEntries: {
        ...state.loccountEntries,
        isFetching: false
        // }
      });
    default:
      return state;
  }
}

function loccounts(
  state = {
    data: [],
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case FETCHED_LOCCOUNTS_REQUEST:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: true,
        data: []
      });
    case FETCHED_LOCCOUNTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: false,
        data: action.loccounts
      });
    case FETCHED_LOCCOUNTS_REQUEST_FAILED:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: false,
        data: []
      });
    case LOCCOUNT_SELECTED:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: false,
        selected: [...state.selected, action.loccount]
      });
    default:
      return state;
  }
}

const loccountApp = combineReducers({
  loccountEntries,
  loccounts
});

export default loccountApp;
