import RatingRankApi from '../api/mockRatingRankApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadRatingRanksSuccess(ratingRanks) {
	return {type: types.LOAD_RATING_RANKS_SUCCESS, ratingRanks};
}

export function loadRatingRanks() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return RatingRankApi.getAllRatingRanks().then(ratingRanks => {
			dispatch(loadRatingRanksSuccess(ratingRanks));
		}).catch(error => {
			throw(error);
		});
	};
}