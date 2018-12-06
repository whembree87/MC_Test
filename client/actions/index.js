import axios from 'axios';

// MLab Database
export const SUMMARY_NEW = 'SUMMARY_NEW';
export const FETCH_ALL_SUMMARIES = 'FETCH_ALL_SUMMARIES';
export const DELETE_SUMMARY = 'DELETE_SUMMARY';
export const FETCH_SUMMARY = 'FETCH_SUMMARY';

export function saveSummary(url, summary, callback) {
    const summaryObj = {
        url     : url,
        summary : summary
    };

    const request = axios.post('/api/summary', summaryObj).then(() => callback());

    return {
        type: SUMMARY_NEW,
        payload: request
    }
}

export function fetchAllSummaries() {
    const request = axios.get('/api/summaries');

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

// MeaningCloud API
const MEANING_CLOUD_ROOT_URL = 'https://api.meaningcloud.com/summarization-1.0';
const MEANING_CLOUD_API_KEY = '';// ** SET MEANINGCLOUD API KEY ***

export function fetchSummary(targetUrl, sentenceTotal) {
    const bodyFormData = new FormData();
    bodyFormData.set('key', MEANING_CLOUD_API_KEY);
    bodyFormData.set('url', targetUrl);
    bodyFormData.set('sentences', sentenceTotal);

    const request = axios({
        method: 'post',
        url: MEANING_CLOUD_ROOT_URL,
        data: bodyFormData
    });

    return {
        type: FETCH_SUMMARY,
        payload: request
    }
}
