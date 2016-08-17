import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render () {
		debugger;
		return (
			<div className="jumbotron">
				<h1>Catalyst O3 Trainning HomePage</h1>
				<p> You can add new Associate Activity Here...</p>
				<Link to="course" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;