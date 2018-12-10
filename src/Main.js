import React, { Component } from 'react';
import { Chapter01 } from './chapters';

class App extends Component {
	render() {
		return (
			<div>
				<div>MAIN</div>
				<Chapter01 />
				<hr />
				<div>Thanks to:</div>
				<h4>inspiration:</h4>
				<div>Factfulness</div>
				<h4>data:</h4>
				<div>Gapminder</div>
				<h4>maps:</h4>
				<div>https://mapchart.net/</div>
				<h4>icons:</h4>
				<div>
					Icons made by
					<a
						href="https://www.flaticon.com/authors/picol"
						title="Picol"
					>
						{' '}Picol{' '}
					</a>
						from
					<a
						href="https://www.flaticon.com/"
						title="Flaticon"
					>
						www.flaticon.com
					</a>
						is licensed by
					<a
						href="http://creativecommons.org/licenses/by/3.0/"
						title="Creative Commons BY 3.0"
						target="_blank"
					>
						CC 3.0 BY
					</a>
				</div>
			</div>
		);
	}
}

export default App;
