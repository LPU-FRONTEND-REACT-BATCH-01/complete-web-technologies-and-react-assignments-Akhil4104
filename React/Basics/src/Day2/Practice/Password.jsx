import React, { useState } from 'react'

export const Password = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(prev=>!prev);
  };

  return (
      <div>
          <input type={show ? "text" : "password"} placeholder="Enter your password"/>
          {/* <button onClick={handleShow}>{show ? "Hide" : "Show"}</button> */}
          <button onClick={handleShow}>
              <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
          </button>
      </div>
  );
};

export default Password;
