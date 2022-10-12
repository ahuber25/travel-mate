import {React, useEffect} from "react";
const location = document.querySelector('.town');
const api = 'https://countries-cities.p.rapidapi.com/location/country/US/'+ location +'/list?page=2&per_page=20&population=1501'
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': '6a265e5258msh0a7e67a0d323c30p122210jsnfd5281675f2d',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};

fetch(api, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));


function Home() {
    const myFunction = () => {
        // your logic here
        console.log('pressed Enter ✅');  

      };
    
      useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
          if (event.key === 'Enter'|| event.key === 'return') {
            event.preventDefault();
    
            // 👇️ your logic here
            myFunction();
          }
        };

    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);


    
    return (
        <section className="home">
            <div className="section-titles">
                <h3>Where shall we take you?</h3>
                <p><input className="town" type="text" placeholder="Search.." ></input></p>
            </div>
            <div className="info">
                <p>Travel Mate description here</p>
            </div>
        </section>
        )
    }

export default Home;