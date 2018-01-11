import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { fetchLoccountEntriesWhenNeeded } from "./actions";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const preloadedState = {
  loccountEntries: {
    isFetching: false,
    data: [],
    dataTotal: 0,
    pageCurrent: 1,
    pageSize: 10,
    pagesTotal: 0
  },
  loccounts: [],
  smth: true,
  smthdiff: ["a", "b", "c"]
};
let store = configureStore(preloadedState);
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// Stop listening to state updates
unsubscribe();
// Dispatch some actions
store.dispatch(fetchLoccountEntriesWhenNeeded());

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
