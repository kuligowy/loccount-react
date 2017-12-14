import React, {Component} from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import LoccountEntry from "./LoccountEntry";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
  propContainer: {
    width: 200,
    overflow: "hidden",
    margin: "20px auto 0"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  }
};

export default class LoccountTable extends React.Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: "300px",
    tableData: {}
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({height: event.target.value});
  };
  componentDidMount() {
    fetch("http://localhost:3000/api/loccount/entries").then(response => response.json()).then(data => {
      console.log(data);
      this.setState({tableData: data});
    });
  }

  render() {
    return (<MuiThemeProvider>
      <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
        <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{
                textAlign: "center"
              }}>
              Super Header
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="Loccount">Loccount</TableHeaderColumn>
            <TableHeaderColumn tooltip="L.P">lp</TableHeaderColumn>
            <TableHeaderColumn tooltip="Title">Title</TableHeaderColumn>
            <TableHeaderColumn tooltip="txDate">txDate</TableHeaderColumn>
            <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
            <TableHeaderColumn tooltip="Difference">
              Difference
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            this.state.tableData.data.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.lp}</TableRowColumn>
              <TableRowColumn>{row.title}</TableRowColumn>
              <TableRowColumn>{row.txDate}</TableRowColumn>
              <TableRowColumn>{row.amount}</TableRowColumn>
              <TableRowColumn>{row.difference}</TableRowColumn>
            </TableRow>))
          }
        </TableBody>
        <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
          <TableRow>
            <TableRowColumn>ID</TableRowColumn>
            <TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Status</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn colSpan="3" style={{
                textAlign: "center"
              }}>
              Super Footer
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
    </MuiThemeProvider>);
  }
}
