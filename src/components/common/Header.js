import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import SearchBar from './SearchBar';

const Header = ({loading}) => {
	debugger;
	return (
		<div  id="header">
			<nav>
				<div className="floatLeft">
					<b>Catalyst O3 Tracker</b>&nbsp; &nbsp;&nbsp; &nbsp;
					<IndexLink to="/" activeClassName="active" >Home</IndexLink>
					{" | "}
					<Link to="/courses" activeClassName="active">Training Cycles</Link>
					{loading && <LoadingDots interval={1000} dots={20}/>}					
				</div>
				<div className="floatRight">
					&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
					<div className="floatLeft" id="hearderSearchBar">
						<SearchBar onSearchTermChange={[]}  className="floatLeft" /> 
					</div>
					<div className="floatRight">
						<span className="floatRight">
						<a href="">Admin</a>
						&nbsp; &nbsp;
						<a href="">LogOut</a>
						</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;