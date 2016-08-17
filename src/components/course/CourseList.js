import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
	debugger;
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Week</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(course => <CourseListRow key={course.id} course={course}/>
				)}
			</tbody>
		</table>

	);
};

CourseList.propTypes = {
	courses: PropTypes.array.isRequired
};

export default CourseList;