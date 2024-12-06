import React, { useState } from 'react';
import './Demo.css';

interface DemoProps extends React.PropsWithChildren {}

const Demo: React.FC<DemoProps> = ({ children }) => {
    const [message, setMessage] = useState<string>("");

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
        <div className="wrapper">
            <div className="container">
                {children}
                <h1>Welcome to the Demo</h1>
                <button className="my-button" onClick={handleClick}>
                    Click Me
                </button>
                {message && <p className="response-message">{message}</p>}
            </div>
        </div>
    );
};

export default Demo;
