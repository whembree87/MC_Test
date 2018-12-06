import axios from 'axios';

export const SUMMARY_NEW = 'SUMMARY_NEW';
export const FETCH_ALL_SUMMARIES = 'FETCH_ALL_SUMMARIES';
export const DELETE_SUMMARY = 'DELETE_SUMMARY';

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
const SERVER_ROOT_URL = 'https://obscure-beyond-43656.herokuapp.com';
const MEANING_CLOUD_ROOT_URL = 'https://api.meaningcloud.com/summarization-1.0';
const MEANING_CLOUD_API_KEY = 'd2642ad283261958566a1ab1e4667410';

export function saveSummary(url, summary, callback) {
    const summaryObj = {
        "url"     : url,
        "summary" : summary
    };

    const request = axios.post(SERVER_ROOT_URL + '/api/summaries/new', summaryObj).then(() => callback());

    return {
        type: SUMMARY_NEW,
        payload: request
    }
}

export function fetchAllSummaries() {
    const request = axios.get(SERVER_ROOT_URL + '/api/summaries/all');

    return {
        type: FETCH_ALL_SUMMARIES,
        payload: request
    }
}

export function deleteSummary(summaryId, callback) {
    const request = axios.delete(SERVER_ROOT_URL + '/api/summaries/delete/' + summaryId).then(() => callback);

    return {
        type: DELETE_SUMMARY,
        payload: summaryId
    }
}

export function fetchSummary(targetUrl, sentenceTotal) {
    const bodyFormData = new FormData();
    bodyFormData.set('key', MEANING_CLOUD_API_KEY);// ** SET MEANINGCLOUD API KEY ***
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