import React, { Component } from "react";
import { connect } from "react-redux";
import LoccountTable from "./LoccountTable";
import { fetchLoccountEntriesWhenNeeded } from "../actions";

const LoccountFilter = (onClick, loccounts) => {
  <ul>
    loccounts.map(loccount =>
    {
      <li>
        <input type="checkbox" onClick={onClick} />
        {loccount._id}
      </li>
    })
  </ul>;
};

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
    onClick: loccount => {
      dispatch();
    }
  };
};

const LoccountFilterContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoccountFilter
);

export default LoccountFilterContainer;
