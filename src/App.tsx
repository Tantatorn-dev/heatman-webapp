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
        <Helmet>
          <style>{`body { background-color: ${theme.palette.secondary.main} ; }`}</style>
        </Helmet>
        <div>
          <Bar />
          <TemperatureDisplay />
          <TemperatureChart/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
