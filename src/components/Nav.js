import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h2>MERN</h2>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                <link to="/register">Register</link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
