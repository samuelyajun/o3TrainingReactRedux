import React, {PropTypes} from 'react';
//import {Link} from 'react-router';

class CourseListRow extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	handleClick() {
		console.log("clickTheRow:");
	}

	render () {
		const {course} = this.props;
		return (
			<tr className="table-row" onClick={this.handleClick} >
				<td>{course.title}<br />{course.ratingRankId}</td>
			</tr>
		);
	}

}

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired
};



export default CourseListRow;