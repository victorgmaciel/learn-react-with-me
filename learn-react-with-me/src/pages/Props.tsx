import { Link } from "react-router-dom";

export default function Props() {
    return (
        <>
            <h1>Learn Props</h1>

            <Link to="/" className="enter-link">
                <button className="state-back-button">Back</button>
            </Link>
        </>
    )
}