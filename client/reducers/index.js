import { combineReducers } from 'redux';
import SummaryReducer from './reducer_summary';
import SummaryListReducer from './reducer_summaryList';

const rootReducer = combineReducers({
  summary: SummaryReducer,
  summaryList: SummaryListReducer
});

export default rootReducer;