import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
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
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: "300px",
    tableData: {}
  };

  componentDidMount() {
    this.props.fetchLoccountEntriesWhenNeeded();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="7"
                tooltip="Super Header"
                style={{
                  textAlign: "center"
                }}
              >
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Idx">idx</TableHeaderColumn>
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

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.loccountEntries.data.data.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.loccount}</TableRowColumn>
                <TableRowColumn>{row.lp}</TableRowColumn>
                <TableRowColumn>{row.title}</TableRowColumn>
                <TableRowColumn>{row.txDate}</TableRowColumn>
                <TableRowColumn>{row.amount}</TableRowColumn>
                <TableRowColumn>{row.difference}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableRowColumn
                colSpan="6"
                style={{
                  textAlign: "center"
                }}
              >
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </MuiThemeProvider>
    );
  }
}
