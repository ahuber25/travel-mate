import React from "react";

function Nav() {

    
    return (
        <header>
        <h1>Travel Mate</h1>
        <div className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#logout">Logout</a></li>
                
            </ul>
        </div>
    </header>
    )
}

export default Nav;