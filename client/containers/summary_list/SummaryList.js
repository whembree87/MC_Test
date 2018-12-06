import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAllSummaries } from '../../actions';
import SummaryListItem from './SummaryListItem';

class SummaryList extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };// For coloring table -- Even : White , Odd : Grey
    }

    componentDidMount() {
        this.props.fetchAllSummaries();
    }

    renderSummaries() {
        return _.map(this.props.summaryList, summary => {
            return (
                    <SummaryListItem
                        key={summary._id}
                        id={summary._id}
                        url={summary.url}
                        summary={summary.summary}
                        color_id={this.state.count++}/>
                );
            }
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {this.renderSummaries()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { summaryList: state.summaryList };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllSummaries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryList);