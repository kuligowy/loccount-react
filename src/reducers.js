import { combineReducers } from "redux";
import {
  FETCHED_LOCCOUNT_ENTRIE_REQUEST,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED,
  FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS,
  LOCCOUNT_DESELECTED,
  LOCCOUNT_SELECTED,
  FETCHED_LOCCOUNTS_REQUEST,
  FETCHED_LOCCOUNTS_REQUEST_SUCCESS,
  FETCHED_LOCCOUNTS_REQUEST_FAILED,
  LOCOUNT_ENTRY_ROW_SELECETED
} from "./actions";

function entries(
  state = {
    data: [],
    total:20,
    pageCurrent:1,
    pageSize:10,
    pagesTotal:2,
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST:
      return Object.assign({}, state, {
        ...state, isFetching: true
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        ...state, isFetching: false,
        data: action.loccountEntries.data,
        total:action.loccountEntries.total,
        pageCurrent:action.loccountEntries.pageCurrent,
        pageSize:action.loccountEntries.pageSize,
        pagesTotal:action.loccountEntries.pagesTotal,
        isFetching: false
      });
    case FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED:
      return Object.assign({}, state, {
        ...state, isFetching: false
      });
    case LOCOUNT_ENTRY_ROW_SELECETED:
    return Object.assign({}, state, {
      ...state,
      data: state.data.map((entry,idx)=>
        //TODO: wtf ? {...entry, selected: (action.row.includes(idx))})
        (action.row.includes(idx)) ? {...entry, selected: true} : {...entry, selected: false}
      )
    });
    default:
      return state;
  }
}

function loccounts(
  state = {
    data: [],
    isFetching: false,
    selectedLocountEntriesRows: []
  },
  action
) {
  switch (action.type) {
    case FETCHED_LOCCOUNTS_REQUEST:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: true,
        data: [],
        selected:[]
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
    case LOCCOUNT_DESELECTED:
      return Object.assign({}, state, {
        ...state.loccounts,
        isFetching: false,
        selected: state.selected.filter(element => element !== action.loccount)
      });

    default:
      return state;
  }
}

const loccountApp = combineReducers({
  entries,
  loccounts
});

export default loccountApp;
