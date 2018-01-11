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
import _ from "lodash";
import Pagination from 'material-ui-pagination';

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
    multiSelectable: true,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: "300px",
    tableData: {},
    onRowSelected: (selectedRows) => {
        console.log(selectedRows)
        //this.props.tableRowSelected(selectedRows);
    }
  };

  generateQuery(number){
    var   params = {};
    params.page = number;
    params.loccounts = this.props.loccounts;
    return params;
  }

  componentDidMount() {
    this.props.fetchLoccountEntriesWhenNeeded(this.generateQuery());
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    if(!_.isEqual(prevProps.loccounts,this.props.loccounts)){
       console.log('\tupdated');
       console.log(this.props.loccounts);
       console.log(prevProps.loccounts);
       this.props.fetchLoccountEntriesWhenNeeded(this.generateQuery());
    }
  }


  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection = {this.props.tableRowSelected}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Idx">idx</TableHeaderColumn>
              <TableHeaderColumn tooltip="Loccount">Loccount</TableHeaderColumn>
              <TableHeaderColumn tooltip="L.P">lp</TableHeaderColumn>
              <TableHeaderColumn tooltip="Title">Title</TableHeaderColumn>
              <TableHeaderColumn tooltip="txDate">txDate</TableHeaderColumn>
              <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
              <TableHeaderColumn tooltip="Difference">Difference</TableHeaderColumn>
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
                colSpan="7"
                style={{
                  textAlign: "center"
                }}
              >
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
        <Pagination
          total = { this.props.loccountEntries.data.pagesTotal}
          current = { this.props.loccountEntries.data.pageCurrent }
          display = { this.props.loccountEntries.data.pagesTotal }
          onChange = { number => this.props.fetchLoccountEntriesWhenNeeded(this.generateQuery(number)) }
        />
        </div>
    );
  }
}
