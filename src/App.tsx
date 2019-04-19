import React, { Component } from 'react';
import './App.css';
import Bar from './components/appbar/Bar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#CA1C1D"
    },
    secondary: {
      main: "#E5AF70"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">
          <Bar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
