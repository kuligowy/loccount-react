import { connect } from "react-redux";
import LoccountTable from "./LoccountTable";
import { fetchLoccountEntriesWhenNeeded } from "../actions";

const mapStateToProps = state => {
  return {
    loccountEntries: state.loccountEntries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLoccountEntriesWhenNeeded: loccounts => {
      dispatch(fetchLoccountEntriesWhenNeeded(loccounts));
    }
  };
};

const LoccountTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoccountTable
);

export default LoccountTableContainer;
