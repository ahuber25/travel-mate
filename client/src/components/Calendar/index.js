import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {

        

        return(
                <section className="calendar">

                        <div className="event-form">
                        Enter Trip Times/Events:
                        <input type="text" placeholder="Trip Name..."></input><br/>
                        Start:
                        <select name="Month" id="month">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                        </select>
                        <input type="number" min="1" max="31"></input><br/>
                        End:
                        <select name="Month" id="month">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                        </select>
                        <input type="number" min="1" max="31"></input><br/>
                        <input type="submit"></input>
                        </div>
                
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                { title: 'Start Trip', date: '2022-10-07' },
                { title: 'End Trip', date: '2022-10-14' }
                ]}/>

                </section>
        )

        

}

export default Calendar;