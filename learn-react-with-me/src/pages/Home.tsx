import { Link } from "react-router-dom";
import dragon from '../assets/gen_dragon.png'
import { FaReact } from "react-icons/fa";
import '../styles/Home.css'

function Home() {
    return (
        <>
            <header>

                <img className="dragon" src={dragon} alt='angry react dragon' />
            </header>
            <FaReact className="floating-react react-1" />
            <FaReact className="floating-react react-2" />
            <FaReact className="floating-react react-3" />
            <FaReact className="floating-react react-4" />

            <h1>Learn React with Me</h1>
            <FaReact className="floating-react react-1" />
            <p className="opening-paragraph">Welcome to the React learning journey! I've worked with the framework before but wanted to deepen my understanding and improve my skills. So, let's get started! Click below to begin.</p>

            <div className="card">
                <Link to="/whatIsReact" className="enter-link">
                    <button>What is React?</button>
                </Link>
                <br />
                <br />
                <Link to="/learnState" className="enter-link">
                    <button>Learn State</button>
                </Link>
                <br />
                <br />
                <Link to="/learnForms" className="enter-link">
                    <button>Learn Forms</button>
                </Link>
                <br />
                <br />
                <Link to="/learnProps" className="enter-link">
                    <button>Learn Props</button>
                </Link>
            </div>
        </>
    );
}

export default Home;