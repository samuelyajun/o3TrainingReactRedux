import React, {PropTypes} from 'react';

const CommentTextInput = ({name, label, onChange, placeholder, value, error}) => {
	let wrapperClass = 'form-group';
	if (error && error.length > 0) {
		wrapperClass += " " + 'has-error';
	}
	debugger;
	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
				<textarea name={name} className="commentBox" rows="5" cols="10" placeholder={placeholder} value={value} onChange={onChange}></textarea>
				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	);
};

CommentTextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default CommentTextInput;