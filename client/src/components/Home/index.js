import {React, useEffect} from "react";

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
                <p><input id="city" type="text" placeholder="Search.." ></input></p>
            </div>
            <div className="info">
                <p>Travel Mate description here</p>
            </div>
        </section>
        )
    }

export default Home;