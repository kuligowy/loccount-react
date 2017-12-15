import React from "react";
import { TableHeader, TableHeaderColumn, TableRow } from "material-ui/Table";

const LTableHeader = () => (
  <TableHeader>
    <TableRow>
      <TableHeaderColumn
        colSpan="3"
        tooltip="Super Header"
        style={{
          textAlign: "center"
        }}
      >
        Super Header
      </TableHeaderColumn>
    </TableRow>
    <TableRow>
      <TableHeaderColumn tooltip="Loccount">Loccount</TableHeaderColumn>
      <TableHeaderColumn tooltip="L.P">lp</TableHeaderColumn>
      <TableHeaderColumn tooltip="Title">Title</TableHeaderColumn>
      <TableHeaderColumn tooltip="txDate">txDate</TableHeaderColumn>
      <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
      <TableHeaderColumn tooltip="Difference">Difference</TableHeaderColumn>
    </TableRow>
  </TableHeader>
);

export default LTableHeader;
