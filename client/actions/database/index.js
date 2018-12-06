import axios from 'axios';

export const SUMMARY_NEW = 'SUMMARY_NEW';
export const FETCH_ALL_SUMMARIES = 'FETCH_ALL_SUMMARIES';
export const DELETE_SUMMARY = 'DELETE_SUMMARY';

export function saveSummary(url, summary, callback) {
    const summaryObj = {
        "url"     : url,
        "summary" : summary
    };

    const request = axios.post('/api/summaries/', summaryObj).then(() => callback());

    return {
        type: SUMMARY_NEW,
        payload: request
    }
}

export function fetchAllSummaries() {
    const request = axios.get('/api/summaries/');

    return {
        type: FETCH_ALL_SUMMARIES,
        payload: request
    }
}

export function deleteSummary(summaryId, callback) {
    const request = axios.delete('/api/summaries/' + summaryId).then(() => callback);

    return {
        type: DELETE_SUMMARY,
        payload: summaryId
    }
}