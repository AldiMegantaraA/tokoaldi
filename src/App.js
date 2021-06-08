import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const JacketsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const SneakersPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const WomenPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const MenPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/jackets' component={HatsPage} />
        <Route path='/sneakers' component={HatsPage} />
        <Route path='/womens' component={HatsPage} />
        <Route path='/mens' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
