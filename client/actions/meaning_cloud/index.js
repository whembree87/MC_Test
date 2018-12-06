import axios from 'axios';

export const FETCH_SUMMARY = 'FETCH_SUMMARY';

const MEANING_CLOUD_ROOT_URL = 'https://api.meaningcloud.com/summarization-1.0';
const MEANING_CLOUD_API_KEY = 'd2642ad283261958566a1ab1e4667410';// ** SET MEANINGCLOUD API KEY ***

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