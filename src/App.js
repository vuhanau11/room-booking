import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import PageNotFound from './pages/PageNotFound';
import SimpleReactLightbox from 'simple-react-lightbox';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <SimpleReactLightbox>
        <Switch>
          <Route exact path={['/', '/home']} component={HomeScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/city/:id" component={Rooms} />
          <Route exact path="/rooms/:id" component={RoomDetail} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
