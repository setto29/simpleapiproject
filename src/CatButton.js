import React, { useState } from 'react';
import SetPic from './CatPicGen';

const CatButton = () => {
  const [showCatPic, setShowCatPic] = useState(false);

  const handleClick = () => {
    setShowCatPic(true);
  };

  return (
    <div className='tc'>
      <button onClick={handleClick}>Free Cat Photo</button>
     <p> {showCatPic && <SetPic />}</p>
    </div>
  );
};

export default CatButton;
