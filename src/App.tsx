import React, { Component } from 'react';
import './App.css';
import Bar from './components/appbar/Bar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TemperatureDisplay from './components/content/TemperatureDisplay';
import { Helmet } from "react-helmet";
import ControlAlarm from './components/content/ControlAlarm';

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

interface Props { }

class App extends Component {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <Helmet>
          <style>{`body { background-color: ${theme.palette.secondary.main} ; }`}</style>
        </Helmet>
        <div>
            <Bar />
            <TemperatureDisplay />
            <ControlAlarm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
