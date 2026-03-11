import { Link } from "react-router-dom";
import '../styles/WhatIsReact.css'

export default function WhatIsReact() {
    return (
        <>
            <div>
                <h1>What is React?</h1>
                <p className="react-paragraph">React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating web applications. React allows developers to create reusable UI components, manage state efficiently, and build complex applications with ease.</p>
                <p>One of the key features of React is its virtual DOM, which optimizes rendering performance by only updating the parts of the UI that have changed. This makes React applications fast and responsive.</p>
                <p>React also has a large ecosystem of libraries and tools that can be used to enhance development, such as React Router for routing, Redux for state management, and many others.</p>
            </div>
            <Link to="/" className="enter-link">
                <button className="state-back-button">Back</button>
            </Link>
        </>
    );
}