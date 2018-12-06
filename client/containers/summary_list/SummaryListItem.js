import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSummary } from '../../actions/index';

class SummaryListItem extends Component {
    deleteSummary() {
        const { id } = this.props;

        this.props.deleteSummary(id, () => {
            this.props.history.push('/');// Reload page
        });
    }

    render() {
        const { color_id } = this.props;
        const background_color = color_id % 2 === 0 ? {backgroundColor: 'white'} : {backgroundColor: 'whitesmoke'};

        return (
            <li className="list-group-item" style={background_color}>
                <div>
                    <h5>URL</h5>
                    {this.props.url}
                </div>
                <hr/>
                <div>
                    <h5>URL Summary</h5>
                    {this.props.summary}
                </div>
                <button
                    className="btn btn-danger btn-large"
                    onClick={this.deleteSummary.bind(this)}>
                    Delete
                </button>
            </li>
        )
    }
}

export default connect(null, { deleteSummary })(SummaryListItem);