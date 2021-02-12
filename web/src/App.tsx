import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { theme } from './config';

import Routes from './routes';

function App() {
	return (		
		<ThemeProvider theme={ theme }>
			<GlobalStyles />			
			<Routes />			
		</ThemeProvider>		
	);
}

export default App; 
