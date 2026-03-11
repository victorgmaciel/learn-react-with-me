import { useState } from "react"
import { Link } from "react-router-dom"

import '../styles/State.css'

export default function State() {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    return (
        <>
            <div className="state-page">

                <h1>Learning State in React</h1>

                <p>
                    In React, state lets a component keep track of changing data.
                    When state updates, React automatically re-renders the component
                    so the UI stays in sync with the latest values.
                </p>

                <hr />
                <br />

                <h2>React's <code>setState</code></h2>

                <pre className="code-block">
                    {`React uses useState() to manage state. Example below!
------------------------------------------------------------------
const [count, setCount] = useState(0)

When the user clicks a button, we call setCount() to update the count state. React then re-renders the component to show the new count value.
The Button onClick calls one of the functions
to update the count.`}
                </pre>

                <div className="button-group">
                    <button onClick={subtract}>-</button>
                    <button onClick={add}>+</button>
                </div>

                <div className="count-circle">
                    {count}
                </div>

                <br />
            </div>


            <hr />
            <h2>Refactoring an Array's <code>state</code></h2>

            <p>In React, it can be common for users to populate arrays with data. Here's how you can manage array state:</p>

            <Link to="/" className="enter-link">
                <button className="state-back-button">Back</button>
            </Link>
        </>
    )
}