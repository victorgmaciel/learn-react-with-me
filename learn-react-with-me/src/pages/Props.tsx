import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Props.css";

function ProfileCard({ name, hobby, color }) {
    return (
        <div className="props-card" style={{ borderColor: color }}>
            <h2 style={{ color }}>{name}</h2>
            <p style={{ color }}>Favorite hobby: {hobby}!</p>
        </div>
    );
}

export default function Props() {
    const [name, setName] = useState("Victor");
    const [hobby, setHobby] = useState("Learning React");
    const [color, setColor] = useState("teal");

    return (
        <>
            <h1>Learn Props</h1>

            <p className="react-paragraph">
                Props (short for properties) are a way to pass data from a parent
                component to a child component in React.
            </p>

            <p className="react-paragraph">
                Change the values below and watch how the parent component sends
                new data to the child component using props.
            </p>

            <div className="props-section">

                <div className="props-demo">
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter a name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        value={hobby}
                        placeholder="Enter a hobby"
                        onChange={(e) => setHobby(e.target.value)}
                    />

                    <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value="teal">Teal</option>
                        <option value="royalblue">Blue</option>
                        <option value="tomato">Red</option>
                        <option value="purple">Purple</option>
                    </select>
                </div>

                <ProfileCard name={name} hobby={hobby} color={color} />

            </div>

            <pre className="code-block">
{`<ProfileCard name={name} hobby={hobby} color={color} />

function ProfileCard({ name, hobby, color }) {
  return (
    <div style={{ borderColor: color }}>
      <h2>{name}</h2>
      <p>Favorite hobby: {hobby}</p>
    </div>
  )
}`}
            </pre>

            <Link to="/" className="enter-link">
                <button className="state-back-button">Back</button>
            </Link>
        </>
    );
}