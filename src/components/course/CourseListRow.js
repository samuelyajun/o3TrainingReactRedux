import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
	debugger;
	return (
		<tr>
			<td><Link to={'/course/' + course.id}>{course.title}</Link></td>
			<td><Link to={'/course/' + course.id}>{course.ratingRankId}</Link></td>
		</tr>
	);
};

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
};

export default CourseListRow;