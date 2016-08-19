import React, {PropTypes} from 'react';


const AssociateActivityHeader = () => {

	return (<div>
				<br />
				<br />
				<p>Training Cycles>>Baltimore 2015 Cycle 1 >> Associate Activity </p>
				<h1 className="centerTextCenter">Associate Activity</h1>
				<div id="associateTitleDiv" className="center">
					<div className="floatLeft">
						<h2 className="whiteFont bottom textRight">Jack Gibson</h2>
						<h6 className="whiteFont top textRight">Instructor: Dab Pauthor</h6>
					</div>
					<div className="floatRight center">
						<b  className="whiteFont center">Status: </b>
						<select className="dropdown statusDropDownWidth center">
							<option value="">Active</option>
							<option value="">Not Active</option>
						</select>
					</div>
				</div>
				<br/>
			</div>
	);
};


export default AssociateActivityHeader;