import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
//Redux
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
