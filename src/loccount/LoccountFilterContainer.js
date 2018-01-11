import React, { Component } from "react";
import { connect } from "react-redux";
import LoccountFilter from "./LoccountFilter";
import { fetchLoccountsWhenNeeded, selectLoccount,deselectLoccount } from "../actions";

const mapStateToProps = state => {
  return {
    loccounts: state.loccounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLoccountsWhenNeeded: () => {
      dispatch(fetchLoccountsWhenNeeded());
    },
    onClick: (evt, isInputChecked, loccount) => {
      // console.log(typeof this);
      console.log(evt);
       console.log("is checked " + isInputChecked);
      console.log(loccount);
      if(isInputChecked)
        dispatch(selectLoccount(loccount));
        else
        dispatch(deselectLoccount(loccount))
    }
  };
};

const LoccountFilterContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoccountFilter
);

export default LoccountFilterContainer;
