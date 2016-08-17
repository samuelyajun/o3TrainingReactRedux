import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function teacherAidReducer(state = initialState.teacherAids, action) {
	debugger;
	switch(action.type) {
		case types.LOAD_TEACHER_AIDS_SUCCESS: 
			return action.teacherAids;

		default:
			return state;
	}
}