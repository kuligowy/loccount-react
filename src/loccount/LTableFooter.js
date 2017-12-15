import React from "react";
import { TableFooter, TableRow, TableRowColumn } from "material-ui/Table";

const LTableFooter = () => (
  <TableFooter>
    //adjustForCheckbox={this.state.showCheckboxes}
    <TableRow>
      <TableRowColumn>ID</TableRowColumn>
      <TableRowColumn>Name</TableRowColumn>
      <TableRowColumn>Status</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn
        colSpan="3"
        style={{
          textAlign: "center"
        }}
      >
        Super Footer
      </TableRowColumn>
    </TableRow>
  </TableFooter>
);

export default LTableFooter;
