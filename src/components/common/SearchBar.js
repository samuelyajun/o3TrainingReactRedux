import React, {Component} from 'react';

class SearchBar extends Component  {
	constructor(props) {
		super(props);
		this.state = {query: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(query) {
	    this.setState({query});
	    this.props.onSearchTermChange(query);
  	}

	render () {
		return(
			<div>
				<input value={this.state.query} placeholder="Search for associates..." onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}
} 

export default SearchBar;