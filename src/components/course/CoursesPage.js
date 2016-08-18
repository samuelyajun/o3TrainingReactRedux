import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import AssociateActivityHeader from './AssociateActivityHeader';
import {browserHistory} from 'react-router';
import MondayOfTheCurrentWeek from '../common/MondayOfTheCurrentWeek';
import Frame from 'react-frame-component';

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
				<div>
					<AssociateActivityHeader />
				</div>
				<div class="container">
					<div className="floatLeft border colLeft">
						<input type="submit" value="+" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>Acitivity Feed
						<CourseList courses={courses}/>
					</div>
					<iframe className="floatRight border colRight" src={'/course/' + courses[0].id}>
					</iframe>
				</div>
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