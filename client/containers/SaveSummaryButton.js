import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveSummary } from '../actions';

const SAVE_BUTTON_TEXT = "Save Summary";

class SaveSummaryButton extends Component {
    constructor(props) {
        super(props);

        this.saveSummary = this.saveSummary.bind(this);
    }

    saveSummary(event) {
        event.preventDefault();

        this.props.onSummarySave();
    }

    render() {
        const { summary } = this.props.summary;

        return (
            <button
                type="submit"
                className={summary === undefined ? "hidden" : "btn btn-primary btn-lg"}
                onClick={this.saveSummary}>
                {SAVE_BUTTON_TEXT}
            </button>
        )
    }
}

function mapStateToProps(state) {
    return { summary: state.summary };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveSummary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveSummaryButton);