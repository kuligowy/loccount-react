import React, { Component } from "react";
import Checkbox from "material-ui/Checkbox";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};
export default class LoccountFilter extends React.Component {
  componentDidMount() {
    this.props.fetchLoccountsWhenNeeded();
  }

  render() {
    return (
        <span>
          {this.props.loccounts.data.map((loccount, idx) => (
            <Checkbox
              key={idx}
              label={loccount._id}
              style={styles.checkbox}
              onCheck={(e,isInputChecked)=> this.props.onClick(e,isInputChecked,loccount._id)}
            />
          ))}
        </span>
    );
  }
}
