import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/head.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div  >

    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>

    </div>
  );
}

export default App;
