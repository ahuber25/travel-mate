import React, {  useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    const [ signedIn ] = useState(false)

        return (
            <header>
            <h1>Travel Mate</h1>
            <div className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/calendar">Calendar</NavLink></li>
                    <li><NavLink to="/days">Day</NavLink></li>
                    {!signedIn ? (
                        <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        </>
                    ) : (
                        <>
                        <li><a href="#logout">Logout</a></li>
                        </>
                    )}
                    
                    
                </ul>
            </div>
        </header>
        )
}

export default Nav;