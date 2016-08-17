import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ratingRankReducer(state = initialState.ratingRanks, action) {
	debugger;
	switch(action.type) {
		case types.LOAD_RATING_RANKS_SUCCESS: 
			return action.ratingRanks;

		default:
			return state;
	}
}