import React, { Component } from "react";
import { connect } from "react-redux";
import LoccountFilter from "./LoccountFilter";
import { fetchLoccountsWhenNeeded, selectLoccount } from "../actions";

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
    onClick: (evt, isChecked, loccount) => {
      console.log(typeof this);
      console.log(evt.target);
      console.log("is checked " + isChecked);
      console.log(loccount);
      dispatch(selectLoccount(isChecked));
    }
  };
};

const LoccountFilterContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoccountFilter
);

export default LoccountFilterContainer;
