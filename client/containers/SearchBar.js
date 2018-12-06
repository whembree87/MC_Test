import React, { Component } from 'react';
import { connect } from 'react-redux';

// ToDo : Add error handling for input fields

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { url: '', sentenceTotal: '' };

        this.onURLChange = this.onURLChange.bind(this);
        this.onSentenceTotalChange = this.onSentenceTotalChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onURLChange(event) {
        this.setState({ url: event.target.value });
    }

    onSentenceTotalChange(event) {
        this.setState({ sentenceTotal: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onURLSearch(this.state.url, this.state.sentenceTotal);
    }

    render() {
        const { summary } = this.props.summary;

        return (
            <form className={summary === undefined ? "summarizerForm" : "hidden"} onSubmit={this.onFormSubmit}>

                <div className="form-group">
                    <label>Target URL</label>
                    <input type="url"
                           className="form-control"
                           placeholder="Enter URL"
                           value={this.state.zip}
                           onChange={this.onURLChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter sentence summary total</label>
                    <input type="sentencte total"
                           className="form-control"
                           placeholder="Enter sentence total"
                           value={this.state.sentenceTotal}
                           onChange={this.onSentenceTotalChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }
}

function mapStateToProps(state) {
    return { summary: state.summary };
}

export default connect(mapStateToProps)(SearchBar);