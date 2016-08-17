import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import teacherAids from './teacherAidReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	courses,
	authors,
	teacherAids,
	ajaxCallsInProgress
});

export default rootReducer;