import React, {useState} from 'react';
import './Demo.css';

function Demo() {
    const [message, setMessage] = useState("");

    const handleClick = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/message");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching the message:", error);
      }
    };
  
    return (
      <div className="container">
        <h1>Hello, welcome to</h1>
        <button className="my-button" onClick={handleClick}>
          Click Me
        </button>
        {message && <p className="response-message">{message}</p>}
      </div>
    );
}

export default Demo;