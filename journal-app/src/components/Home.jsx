import paperTexture from '../assets/paper-texture.jpg'
import reactLogo from '../assets/react-logo-text.svg'
import ButtonNext from "./ButtonNext"
import "../utils/logoAnim.js"
import "../app.css"

export default function Home() {
    return (
    <>
        <img className="background-texture" src={paperTexture} alt=""/>
        <div className="home" >
            <img className="home-logo" src={reactLogo} alt="" />
            <main>
                <h1>Journal d'apprentissage</h1>
                <h2>Elina Liault - 2026</h2>
                <ButtonNext />
            </main>
        </div>
    </>
    
    )
}