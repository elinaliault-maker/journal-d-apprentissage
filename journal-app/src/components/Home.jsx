import paperTexture from '../assets/paper-texture.jpg'
import reactLogo from '../assets/react-logo-text.svg'
import ButtonNext from "./ButtonNext"
import "../app.css"
import { useEffect, useRef } from 'react'

export default function Home() {
    const screenRef = useRef(null);
    const logoRef = useRef(null);
    useEffect(() => {
        let topDelta = 1;
        let leftDelta = 1;

        const screen = screenRef.current;
        const logo = logoRef.current;

        // Safety check: make sure the elements exist
        if (!screen || !logo) return;

        // Start the animation interval
        const animInterval = setInterval(() => {
        const currentTop = parseInt(logo.style.top) || 0;
        const currentLeft = parseInt(logo.style.left) || 0;
        const currentRight = currentLeft + logo.clientWidth;
        const currentBottom = currentTop + logo.clientHeight;

        if (currentBottom >= screen.clientHeight) topDelta = -1;
        if (currentTop <= 0) topDelta = 1;
        if (currentRight >= screen.clientWidth) leftDelta = -1;
        if (currentLeft <= 0) leftDelta = 1;

        logo.style.top = currentTop + topDelta + 'px';
        logo.style.left = currentLeft + leftDelta + 'px';
        }, 15);

        // Cleanup: stop the animation the moment you navigate away
        return () => clearInterval(animInterval);
    }, [screenRef, logoRef]);

    return (
    <>
        <img className="background-texture" src={paperTexture} alt=""/>
        <div className="home" ref={screenRef}>
            <img className="home-logo" src={reactLogo} alt="" ref={logoRef} />
            <main>
                <h1>Journal d'apprentissage</h1>
                <h2>Elina Liault - 2026</h2>
                <ButtonNext />
            </main>
        </div>
    </>
    
    )
}