import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Post from './components/Post'
import AddPost from './components/AddPost'
import CreateGroup from './components/CreateGroup'
import Mygroups from './components/Mygroups'
import MyGroupPost from './components/MyGroupPost'
import MyPublicGroups from './components/MyPublicGroups'
import PublicGroupPost from './components/PublicGroupPost'
 
//Redux
import {Provider} from 'react-redux'
import store  from './store'


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/posts' component={Post}></Route>
        <Route exact path='/addpost' component={AddPost}></Route>
        <Route exact path='/createnewgroup' component={CreateGroup}></Route>
        <Route exact path='/mygroups' component={Mygroups}></Route>
        <Route exact path='/publicgroups' component={MyPublicGroups}></Route>
        <Route exact path='/mygrouppost' component={MyGroupPost}></Route>
        <Route exact path='/publicgrouppost' component={PublicGroupPost}></Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
