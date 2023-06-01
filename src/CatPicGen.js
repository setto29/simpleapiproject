import React, { useState } from "react";



function CatApp() {
    const [url, setUrl] = useState("");
  
    const fetchCatPic = () => {
      fetch("https://api.thecatapi.com/v1/images/search").then(
        (response) => response.json()).then((data)=> {
          setUrl(data[0].url);
        });
      };
  
      return (
          <div className='tc'>
           <p> <button onClick={fetchCatPic}>Free Cat Photo</button> </p>
           <p className='dib br3 pa3 ma2 grow bw2 shadow-5'>
           <img alt='' src={url} />
          </p>
          
          
        </div>
      );
  }

  export default CatApp;
