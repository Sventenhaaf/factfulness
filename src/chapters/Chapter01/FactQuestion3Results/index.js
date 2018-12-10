import React, { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import factQuestion3Results from './factQuestion3Results.json';
import { HorizontalBarChart } from '../../../components';
const factQuestion3ResultsData = factQuestion3Results.data.map(row => row.map(el => ({ value: el })));

class FactQuestion3Results extends Component {
	state = { grid: factQuestion3ResultsData };

	handelCellsChanged = changes => {
		const grid = this.state.grid.map(row => [...row]);
		changes.forEach(({cell, row, col, value}) => {
			grid[row][col] = {...grid[row][col], value}
		});
		this.setState({grid})
	};

	render() {
		const barChartData = this.state.grid.map(row => ({
			label: row[0].value,
			value: row[1].value
		}));

		return (
			<div>
				<h3>CHAPTER 1</h3>
				<div style={styles.row}>
					<ReactDataSheet
						data={this.state.grid}
						valueRenderer={(cell) => cell.value}
						onCellsChanged={this.handelCellsChanged}
					/>
					<HorizontalBarChart
						data={barChartData}
						title={'Fact Question 3 Results'}
					/>
				</div>
			</div>
		);
	}
}

const styles = {
	row: {
		display: 'flex',
		flexDirection: 'row'
	}
};

export default FactQuestion3Results;