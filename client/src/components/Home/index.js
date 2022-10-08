import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
        <section className="home">
            <div className="section-titles">
                <h3>Where shall we take you?</h3>
                <p><input type="text" placeholder="Search.."></input></p>
            </div>
            <div className="info">
                <p>Travel Mate description here</p>
            </div>
        </section>
        )
    }
}

export default Home;