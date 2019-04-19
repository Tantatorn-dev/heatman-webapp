import React, { Component } from 'react';
import './App.css';
import Bar from './components/appbar/Bar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TemperatureDisplay from './components/content/TemperatureDisplay';
import { Helmet } from "react-helmet";

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
        <div className="<style>{'body { background-color: red; }'}</style>App">
          <Bar />
          <TemperatureDisplay />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
