import React, { Component } from 'react';
import './App.css';
import Bar from './components/appbar/Bar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TemperatureDisplay from './components/content/TemperatureDisplay';
import { Helmet } from "react-helmet";
import TemperatureChart from './components/content/TemperatureChart';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#274f5a"
    },
    secondary: {
      main: "#82bfbc"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <Helmet>
          <style>{`body { background-color: ${theme.palette.secondary.main} ; }`}</style>
        </Helmet>
        <div>
          <Bar />
          <TemperatureDisplay />
          <TemperatureChart />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
