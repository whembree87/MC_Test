import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchSummary} from "../actions/meaning_cloud";
import {saveSummary} from "../actions/database";
import {bindActionCreators} from "redux";

import SearchBar from './SearchBar';
import SummaryViewer from './SummaryViewer';
import SaveSummaryButton from './SaveSummaryButton';

class Summarizer extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            url: '',
            showSaveSummaryButton: false
        };

        this.onURLSearch = this.onURLSearch.bind(this);
        this.onSummarySave = this.onSummarySave.bind(this);
    }

    onURLSearch(url, sentenceTotal) {
        this.props.fetchSummary(url, sentenceTotal);

        this.setState({
           url: url
        });
    }

    onSummarySave() {
        this.setState({ showSaveSummaryButton: true });

        this.props.saveSummary(this.state.url, this.props.summary.summary, () => {
            this.props.history.push("/");
        });
    }

    showSummarySaveButton(hasSummaryContent) {
        this.setState({ showSaveSummaryButton: hasSummaryContent });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <SearchBar onURLSearch={this.onURLSearch}/>
                    <SummaryViewer/>
                    <SaveSummaryButton onSummarySave={this.onSummarySave}/>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSummary, saveSummary }, dispatch);
}

function mapStateToProps(state) {
    return { summary: state.summary };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summarizer);