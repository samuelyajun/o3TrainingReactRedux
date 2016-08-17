import TeacherAidApi from '../api/mockTeacherAidApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadTeacherAidsSuccess(teacherAids) {
	return {type: types.LOAD_TEACHER_AIDS_SUCCESS, teacherAids};
}

export function loadTeacherAids() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return TeacherAidApi.getAllTeacherAids().then(teacherAids => {
			dispatch(loadTeacherAidsSuccess(teacherAids));
		}).catch(error => {
			throw(error);
		});
	};
}