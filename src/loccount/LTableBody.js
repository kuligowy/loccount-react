import React from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const LTableBody = (
  showCheckboxes,
  deselectOnClickaway,
  showRowHover,
  stripedRows,
  data
) => (
  <TableBody
    displayRowCheckbox={this.state.showCheckboxes}
    deselectOnClickaway={this.state.deselectOnClickaway}
    showRowHover={this.state.showRowHover}
    stripedRows={this.state.stripedRows}
  >
    {data.map((row, index) => (
      <TableRow key={index}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{row.lp}</TableRowColumn>
        <TableRowColumn>{row.title}</TableRowColumn>
        <TableRowColumn>{row.txDate}</TableRowColumn>
        <TableRowColumn>{row.amount}</TableRowColumn>
        <TableRowColumn>{row.difference}</TableRowColumn>
      </TableRow>
    ))}
  </TableBody>
);

export default LTableBody;
