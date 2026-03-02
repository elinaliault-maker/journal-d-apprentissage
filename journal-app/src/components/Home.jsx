import cosmos from '../assets/cosmos.jpg'
import "../app.css"
import ButtonNext from "./button"

export default function Home() {
    return (
    <>
        <img className='background-texture' id="star" src={cosmos} alt=""/>
        <main className="home">
            <h1>Journal d'apprentissage</h1>
            <h2>Elina Liault - 2026</h2>
            <ButtonNext />
        </main>
    </>
    )
}