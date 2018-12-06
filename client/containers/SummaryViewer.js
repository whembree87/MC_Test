import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryViewer extends Component {
    render() {
        const { summary } = this.props.summary;

        return (
            <div className={summary ? "jumbotron" : "hidden"}>
                <p className="display-7">{summary}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { summary: state.summary };
}

export default connect(mapStateToProps)(SummaryViewer);