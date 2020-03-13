import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav"
import Chart from "./components/Chart"
import EvelynData from "./data/Evelyn";
import EvelynPage from "./components/EvelynPage"


function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/evelyn" component={EvelynPage} />

        </Switch>
        <Chart data={EvelynData.week1} />
        <Chart data={EvelynData.week2} />
        <Chart data={EvelynData.week3} />
        <Chart data={EvelynData.week4Untill6} />

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
