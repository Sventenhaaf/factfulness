import React from 'react';
import worldMap from '../assets/world-map.png';
import manStanding from '../assets/man-standing.png';

const MapWithPersons = props => {
	return (
		<div>
			MAP WITH PERSONS
			<div style={styles.content}>
				<img src={worldMap} alt="world map" height={250}/>
				<div style={{...styles.persons, top: 100, left: 80}}>
					<img src={manStanding} alt="man standing" style={styles.person}/>
					<img src={manStanding} alt="man standing" style={styles.person}/>
				</div>
				<div style={{...styles.persons, top: 50, left: 240}}>
					<img src={manStanding} alt="man standing" style={styles.person}/>
				</div>
				<div style={{...styles.persons, top: 130, left: 220}}>
					<img src={manStanding} alt="man standing" style={styles.person}/>
					<img src={manStanding} alt="man standing" style={styles.person}/>
				</div>
				<div style={{...styles.persons, top: 100, left: 300}}>
					<img src={manStanding} alt="man standing" style={styles.person}/>
					<img src={manStanding} alt="man standing" style={styles.person}/>
					<img src={manStanding} alt="man standing" style={styles.person}/>
					<img src={manStanding} alt="man standing" style={styles.person}/>
				</div>
			</div>
		</div>
	)
};

const styles = {
	content: {
		position: 'relative'
	},
	persons: {
		position: 'absolute',
	},
	person: {
		height: 35,
		margin: -8,
		filter: 'drop-shadow(0px 0px 3px #fff)'
		// boxShadow: '2px 2px 5px red'
		// backgroundColor: 'pink'
	}
};

export default MapWithPersons;