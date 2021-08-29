import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateRoom } from './pages/CreateRoom';
import { Home } from './pages/Home.page';

export const Routes: React.FC = () => {
return (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact children={<Home/>} />
      <Route path='/createroom' children={<CreateRoom/>}/>
    </Switch>
  </BrowserRouter>
);
}