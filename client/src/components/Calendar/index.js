import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
        

        return(
                <section className="calendar">

                        <div className="event-form" id="events">
                        Enter Trip Time/Event:
                        <input type="text" placeholder="Enter..."></input><br/>
                        Day:
                        <input type="date"></input><br/>
                        <input type="submit"></input>
                        </div>
                
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                { title: 'Start Trip', date: '2022-10-09' },
                { title: 'End Trip', date: '2022-10-14' }
                ]}/>

                </section>
        )

        

}

export default Calendar;