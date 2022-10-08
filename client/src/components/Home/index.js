import React from "react";

function Home() {
    return (
    <section className="items" id="about">
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

export default Home;