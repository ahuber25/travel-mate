import React from "react";

function Home() {
    return (
        <div>
        <section class="title-image">
        <div class="subtitle">
            <h2>World Traveler</h2>
        </div>
    </section>
    <section class="items" id="about">
        <div class="section-titles">
            <h3>Where shall we take you?</h3>
            <p><input type="text" placeholder="Search.."></input></p>
        </div>
        <div class="info">
            <p>Travel Mate description here</p>
        </div>
    </section>
    </div>
    )
}

export default Home;