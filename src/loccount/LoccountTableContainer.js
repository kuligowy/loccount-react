import { connect } from "react-redux";
import LoccountTable from "./LoccountTable";
import { fetchLoccountEntriesWhenNeeded,tableRowSelected } from "../actions";

const mapStateToProps = state => {
  return {
    loccountEntries: state.loccountEntries,
    loccounts: state.loccounts.selected,
    selectedEntriesRows: state.loccounts.selectedLocountEntriesRows
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLoccountEntriesWhenNeeded: query => {
      dispatch(fetchLoccountEntriesWhenNeeded(query));
    },
    tableRowSelected: rows =>{
      console.log(rows);
      dispatch(tableRowSelected(rows));
    }
  };
};

const LoccountTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoccountTable
);

export default LoccountTableContainer;
