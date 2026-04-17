import React, { useState } from 'react';
import Onn from "./Onn.jpg";
import Off from "./Off.jpg";

const Image = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div>
      <img src={isOn ? Onn : Off} alt={isOn ? "Onn" : "Off"} style={{ width: "300px", height: "300px" }} />
      <br/>
      <button onClick={handleClick} >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default Image;