import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import AssociateActivityHeader from './AssociateActivityHeader';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
	}


	redirectToAddCoursePage() {
		debugger;
		browserHistory.push('/course');
	}

	render() {
		debugger;
		const {courses} = this.props;
		return (
			<div>
				<AssociateActivityHeader />
				<input type="submit" value="+" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
				<CourseList courses={courses}/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
	
};

function mapStateToProps(state, ownProps) {
	debugger;
	return {
		courses: state.courses //course reducer
	};
}

function mapDispatchToProps(dispatch) {
	debugger;
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);