import React, { Component } from 'react';
import { colors } from '../config';

class HorizontalBarChart extends Component {
	render() {
		const { data, title } = this.props;
		console.log(data);
		return (
			<div>
				<h4>{title}</h4>
				<div style={styles.content}>
					<div style={styles.labels}>
						{data.map((item, i) => (
							<div key={i}>{item.label}</div>
						))}
					</div>
					<div style={styles.bars}>
						{data.map((item, i) => (
							<div key={i} style={styles.barWrapper}>
								<div style={{...styles.bar, width: item.value * 10}}></div>
								<div style={styles.percentage}>{`${item.value} %`}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
};

const styles = {
	labels: {
		paddingRight: 10
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		textAlign: 'right'
	},
	barWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	bar: {
		backgroundColor: colors.blue,
		height: 10
	},
	percentage: {
		paddingLeft: 10
	}
};

export default HorizontalBarChart;