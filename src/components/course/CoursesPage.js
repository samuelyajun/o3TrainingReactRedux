import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import AssociateActivityHeader from './AssociateActivityHeader';
import {browserHistory} from 'react-router';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import MondayOfTheCurrentWeek from '../common/MondayOfTheCurrentWeek.js';
//import Frame from 'react-frame-component';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

		this.state = {
			course: Object.assign({}, this.props.course),
			currentDate: '8/22/2016',		
			errors: {},
			saving: false
		};


		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);

	}

	componentWillReceiveProps(nextProps) {
		debugger;
		if (this.props.course.id != nextProps.course.id) {
			//Necessary to populate form when existing course is loaded directly.
			this.setState({course: Object.assign({}, nextProps.course)});
		}
	}


	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		debugger;
		return this.setState({course: course});
	}

	saveCourse(event) {
		event.preventDefault();
		this.setState({saving: true});
		this.props.actions.saveCourse(this.state.course)
			.then(() => this.redirect())
			.catch(error => {
				toastr.error(error);
				this.setState({saving: false});
			});
		debugger;
	}

	redirect() {
		this.setState({saving: false});
		toastr.success('Course Saved');
		this.context.router.push('/courses');
		debugger;
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
					<div className="floatLeft border colLeft yScrollable">
						<input type="submit" value="+" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>&nbsp;Acitivity Feed
						<CourseList courses={courses}/>
					</div>
					<div className="floatRight border colRight leftPadingSpace yScrollable">
						<h1>O3 for week of <MondayOfTheCurrentWeek  currentDate={this.state.currentDate} /></h1>
						<CourseForm allAuthors={this.props.authors}  allTeacherAids={this.props.teacherAids} allRatingRanks={this.props.ratingRanks} onChange={this.updateCourseState}  onSave={this.saveCourse} course={this.state.course} errors={this.state.errors} saving={this.state.saving} />
					</div>
				</div>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	teacherAids: PropTypes.array.isRequired,
	ratingRanks: PropTypes.array.isRequired
};

//Pull in the React Router context so router is available o this.context.router.
CoursesPage.contextTypes = {
	router: PropTypes.object
};


function getCourseById(courses, id) {
	debugger;
	const course = courses.filter(course => course.id == id);
	if (course.length) return course[0]; //since filter returns an array, have to grab the first.
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id; // from the path `/course/:id`

	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}
	
	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

	const teacherAidsFormattedForDropdown = state.teacherAids.map(teacherAid => {
		return {
			value: teacherAid.id,
			text: teacherAid.firstName + ' ' + teacherAid.lastName
		};
	});

	const ratingRankFormattedForDropdown = state.ratingRanks.map(ratingRank => {
		return {
			value: ratingRank.id,
			text: ratingRank.rating
		};
	});
	return {
		courses: state.courses, //course reducer
		course: course,
		authors: authorsFormattedForDropdown,
		teacherAids: teacherAidsFormattedForDropdown,
		ratingRanks: ratingRankFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	debugger;
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);