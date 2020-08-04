import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={['/', '/home']} component={HomeScreen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={RoomDetail} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
