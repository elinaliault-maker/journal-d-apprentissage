import paperTexture from '../assets/paper-texture.jpg'
import ButtonNext from "./button"
import "../app.css"

export default function Home() {
    return (
    <>
        <img className="background-texture" src={paperTexture} alt=""/>
        <main className="home">
            <h1>Journal d'apprentissage</h1>
            <h2>Elina Liault - 2026</h2>
            <ButtonNext />
        </main>
    </>
    )
}