import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import teacherAids from './teacherAidReducer';
import ratingRanks from './ratingRankReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	teacherAids,
	ratingRanks,
	ajaxCallsInProgress
});

export default rootReducer;