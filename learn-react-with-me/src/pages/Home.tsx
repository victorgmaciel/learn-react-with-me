import { Link } from "react-router-dom";
import dragon from '../assets/gen_dragon.png'
import '../styles/Home.css'

function Home() {
    return (
        <>
            <header>
                <img className="dragon" src={dragon} alt='angry react dragon' />
            </header>

            <h1>Learn React with Me</h1>

            <div className="card">
                <Link to="/learnState" className="enter-link">
                    <button>Learn State</button>
                </Link>
                <br />
                 <br />
                <Link to="/learnForms" className="enter-link">
                    <button>Learn Forms</button>
                </Link>
            </div>
        </>
    );
}

export default Home;