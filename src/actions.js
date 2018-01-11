export const SET_LOCCOUNTS = "SET_LOCCOUNTS";
export const SET_NEXT_PAGE = "SET_NEXT_PAGE";
export const SET_PREV_PAGE = "SET_PREV_PAGE";
export const SHOW = "SHOW";

export const LoccountFilters = {
  SHOW_ALL: []
};
/* action creators */
export function showLoccountEntries(loccounts = []) {
  return {
    type: SHOW,
    loccounts
  };
}

export function setLoccountFilter(loccunts) {
  return {
    type: SET_LOCCOUNTS,
    loccounts: loccunts
  };
}

export function setNextPage(index) {
  return {
    type: SET_NEXT_PAGE,
    index
  };
}

export function setPreviousPage(index) {
  return {
    type: SET_PREV_PAGE,
    index
  };
}

export const LOCOUNT_ENTRY_ROW_SELECETED = "LOCOUNT_ENTRY_ROW_SELECETED";
export function tableRowSelected(row){
  return{
    type: LOCOUNT_ENTRY_ROW_SELECETED,
    row
  }
}

export const FETCHED_LOCCOUNT_ENTRIE_REQUEST =
  "FETCHED_LOCCOUNT_ENTRIE_REQUEST";
export function fetchLoccountEntries() {
  return {
    type: FETCHED_LOCCOUNT_ENTRIE_REQUEST
  };
}

export const FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED =
  "FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED";
export function fetchLoccountEntriesFailed(err) {
  return {
    type: FETCHED_LOCCOUNT_ENTRIE_REQUEST_FAILED,
    err
  };
}

export const FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS =
  "FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS";
export function fetchLoccountEntriesSucess(loccountEntries) {
  return {
    type: FETCHED_LOCCOUNT_ENTRIE_REQUEST_SUCCESS,
    loccountEntries
  };
}

export function fetchLoccountEntriesWhenNeeded(query = {loccounts: [], page: 1}) {
  return (dispatch, getState) => {
    dispatch(fetchLoccountEntries());
    var filter = Object.keys(query)
    .map(k => escape(k) + '=' + escape(query[k]))
    .join('&');
    return fetch("http://localhost:3000/api/loccount/entries?"+filter)
      .then(response => response.json())
      .then(json => dispatch(fetchLoccountEntriesSucess(json)))
      .catch(err => dispatch(fetchLoccountEntriesFailed(err)));
  };
}

export const FETCHED_LOCCOUNTS_REQUEST = "FETCHED_LOCCOUNTS_REQUEST";
export function fetchLoccounts(loccountEntries) {
  return {
    type: FETCHED_LOCCOUNTS_REQUEST
  };
}

export const FETCHED_LOCCOUNTS_REQUEST_FAILED =
  "FETCHED_LOCCOUNTS_REQUEST_FAILED";
export function fetchLoccountsFailed(err) {
  return {
    type: FETCHED_LOCCOUNTS_REQUEST_FAILED,
    err
  };
}

export const FETCHED_LOCCOUNTS_REQUEST_SUCCESS =
  "FETCHED_LOCCOUNTS_REQUEST_SUCCESS";
export function fetchLoccountsSuccess(loccounts) {
  return {
    type: FETCHED_LOCCOUNTS_REQUEST_SUCCESS,
    loccounts
  };
}

export function fetchLoccountsWhenNeeded(loccounts = []) {
  return dispatch => {
    dispatch(fetchLoccounts(loccounts));
    return fetch("http://localhost:3000/api/loccount")
      .then(response => response.json())
      .then(json => dispatch(fetchLoccountsSuccess(json)))
      .catch(err => dispatch(fetchLoccountsFailed(err)));
  };
}

export const LOCCOUNT_SELECTED = "LOCCOUNT_SELECTED";
export function selectLoccount(loccount) {
  return { type: LOCCOUNT_SELECTED, loccount };
}

export const LOCCOUNT_DESELECTED = "LOCCOUNT_DESELECTED";
export function deselectLoccount(loccount) {
  return { type: LOCCOUNT_DESELECTED, loccount };
}
