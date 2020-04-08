import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav"
import EvelynPage from "./components/EvelynPage"
import studentsData from "./studentOverviewData/studentsData"
import Chart from "./components/Chart"

function App() {

  const evelyn = studentsData.filter(name => name.studentName === "Evelyn");
  console.log("This should show arrays of data of Evelyn", evelyn)

  // All exercise names
  const exerciseNames = studentsData.map(exercise => {
    return exercise.exercise;
  });
  console.log("This should show all exercise names", exerciseNames);

  // All difficulty ratings from all students
  const difficultyRatingOverview = studentsData.map(difficulty => {
    return parseInt(difficulty.difficultyRating);
  });
  console.log("This should show all the difficulty ratings from all students", difficultyRatingOverview);

  // All fun ratings from all students
  const funRatingOverview = studentsData.map(fun => {
    return parseInt(fun.funRating);
  });
  console.log("This should show all fun ratings from all students", funRatingOverview)





  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/evelyn" component={EvelynPage} />

        </Switch>
        <Chart studentsData={evelyn} exercise={exerciseNames} difficultyRating={difficultyRatingOverview} funRating={funRatingOverview} />
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
