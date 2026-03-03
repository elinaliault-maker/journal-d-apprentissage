import { useState } from 'react';
import { NavLink, Link } from "react-router";
import { SOMMAIRE } from '../utils/sommaireVariables';
import reactLogo from "../assets/react-logo-text.svg";

export default function AccordionSummary() {
    const [isActive, setIsActive] = useState(false);

    const articlesList = <ol>{ SOMMAIRE.map(({titre, url}) => (
        <li key={url}><NavLink to={url}>
            {titre}
        </NavLink></li>
    )) }</ol> 

    return (
        <div className='side-bar'>
            <Link to="/" className='back-home'>
                <img src={reactLogo} alt="" />
                <p>Journal d'apprentissage</p>
            </Link>
            <nav className="accordion">
                <div className="accordion-item">
                    <div
                    className={`accordion-title ${isActive ? "open" : ""}`}
                    onClick={() => setIsActive(!isActive)}
                    >
                    <div>Sommaire</div>
                    <div>{isActive ? '▲' : '▼'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{articlesList}</div>}
                </div>
            </nav>
        </div>
    );
};