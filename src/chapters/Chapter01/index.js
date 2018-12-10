import React, { Component } from 'react';
import FactQuestion3Results from './FactQuestion3Results';
import PeopleDistribution from './PeopleDistribution';

class Chapter01 extends Component {

	render() {

		return (
			<div>
				<hr />
				<PeopleDistribution />
				<hr/>
				<FactQuestion3Results/>
				<hr />
			</div>
		);
	}
}

export default Chapter01;