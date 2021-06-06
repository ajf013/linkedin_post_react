import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';
import Main from './components/Main.js';
import Typewriter from "react-simple-typewriter";


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				
				{/* // Pass the toggle functionality to the button
				<button onClick={toggleTheme}>Toggle theme</button>
				<h1>It's a light theme!</h1>
				<footer></footer> */}
				<Main onToggle={toggleTheme} theme={theme} />
			</>
		</ThemeProvider>

	);
}

export default App;
