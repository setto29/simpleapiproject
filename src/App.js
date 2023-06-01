import React, { useState } from "react";
import './App.css';


function App() {
  const [content, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://api.quotable.io/quotes/random").then(
      (response) => response.json()).then((data)=> {
        setQuote(data[0].content + " ... " + data[0].author);
      });
    };

    return (
      <div className='tc'>
        <h4>Inspirational Quote For the Day</h4> 
       <p> <button onClick={getQuote}>Inspire Me</button> </p>
      
      <p className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        Your Quote For The Day:
        <p> </p>
        {content}
        </p>
        
        
      </div>
    );
}

export default App;

