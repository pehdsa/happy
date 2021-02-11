
import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import { theme } from './config';

function App() {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyles />
			<React.Fragment>
				<div className="App">
					<h1>Hello</h1>
				</div>
			</React.Fragment>
		</ThemeProvider>		
	);
}

export default App; 
