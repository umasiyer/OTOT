import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from '../src/components/login'
import Home from '../src/components/home'
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import configureStore from './store'
import Titles from '../src/components/title'

const initialState = {articles: {
    items: [],
    hasErrored: false,
}
}
const store = configureStore(initialState);
class App extends Component {
  render() {
      return (
          <Provider store={store}>
           <Router>
    <MuiThemeProvider><div>
          <Menu>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/login">Login</Link></MenuItem>
        <MenuItem><Link to="/titles">Titles</Link></MenuItem>
      </Menu>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/titles" component={Titles}/>
    </div>
    </MuiThemeProvider>
  </Router>
  </Provider>
           
    );
  }
}



export default App;
