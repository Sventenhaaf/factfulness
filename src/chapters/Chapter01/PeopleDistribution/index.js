import React, { Component } from 'react';
import { MapWithPersons } from '../../../components';
import peopleDistribution from './peopleDistribution.json';
const peopleDistributionData = peopleDistribution.data.map(row => row.map(el => ({ value: el })));

class PeopleDistribution extends Component {
	render() {
		return (
			<div>PEOPLE DIST
				<MapWithPersons/>
			</div>
		)
	}
}

export default PeopleDistribution;