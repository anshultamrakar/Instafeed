import React from 'react';
import {useState} from "react"
import InstaFeeds from './InstaFeed';




function App() {

  // const [selectGenre, setGenre] = useState("Jazz");
  
  // function genreClickHandler(genre) {
  //   setGenre(genre);
  // }

  return (
    <div className="App">
    <h1> Our Instagram </h1>
      <p style={{ fontSize: 18 }}>
        Welcome to our Instagram
      </p>
 
      {/* <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              color: "red",
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className='instagram'>
      <InstaFeeds token="IGQVJXTlZApaVl4c0ZA5S0pEQTJGNjdOZAUNSVWJtRlU1a2VkR1A0MzMxMlotWVZAUT2g5TnZAYQk1abmtTTUpwYTItSEgtM0kzZAnNwV3BXRHo2dGY4RS1DYy1laFVuR3dzZA25vWWRBNVRR" limit={50}/>
      </div>
     
    </div>
  );
}

export default App;
