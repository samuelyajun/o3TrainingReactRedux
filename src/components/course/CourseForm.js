import React from 'react';
import TextInput from '../common/TextInput';
import CommentTextInput from '../common/CommentTextInput';
import SelectInput from '../common/SelectInput';


//stateless function component
const CourseForm = ({course, allAuthors, allTeacherAids, onSave, onChange, saving, errors}) => {
	//onCancel ();
	return (
		<form>
			<br/>
			<TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title}/> 
			<SelectInput name="authorId" label="Instructor" value={course.authorId} defaultOption="Select Instructor" options={allAuthors} onChange={onChange} error={errors.authorId}/>
			<SelectInput name="teacherAidId" label="Teacher Aid" value={course.teacherAidId} defaultOption="Select Teacher Aid" options={allTeacherAids} onChange={onChange} error={errors.teacherAidId}/>
			<CommentTextInput name="category" label="Session Notes" value={course.category} onChange={onChange} error={errors.category}/>
			<CommentTextInput name="length" label="Follwow up on Previous O3 Action Items" value={course.length} onChange={onChange} error={errors.length}/>
			<CommentTextInput name="length" label="This Week's Action Items" value={course.length} onChange={onChange} error={errors.length}/>
			<input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'} className="btn btn-success" onClick={onSave}/>
			<span>      &nbsp;  </span>
			<input type="submit" value="Cancel" className="btn btn-success" onClick=""/>
		</form>
	);
};

CourseForm.propTypes = {
	course: React.PropTypes.object.isRequired,
	allAuthors: React.PropTypes.array,
	allTeacherAids: React.PropTypes.array,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default CourseForm;