import React from 'react';
import Chart from "../components/Chart"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EvelynData from "../studentOverviewData/Evelyn";

function EvelynPage() {
    return (
        <div>

            <h3>Evelyn</h3>
            <Router>
                <ul className="nav-weeks">
                    <li>Week 1</li>
                    <li>Week 2</li>
                    <li>Week 3</li>
                    <li>Week 4, 5 and 6</li>
                </ul>
            </Router>
        </div>

    );
}

export default EvelynPage;
