import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Student Dashboard</h3>
            <ul className="nav-links">
                <Link to="/evelyn">
                    <li>Evelyn</li>
                </Link>
                <li>Aranka</li>
                <li>Floris</li>
                <li>Hector</li>
                <li>Martina</li>
                <li>Maurits</li>
                <li>Rahima</li>
                <li>Sandra</li>
                <li>Wietske</li>
                <li>Storm</li>
            </ul>
        </nav>

    );
}

export default Nav;
