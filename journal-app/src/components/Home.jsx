import paperTexture from '../assets/paper-texture.jpg'
import reactLogo from '../assets/react-logo-text.svg'
import ButtonNext from "./ButtonNext"
import "../app.css"
import { useEffect, useRef } from 'react'

export default function Home() {
    const screenRef = useRef(null);
    const mainRef = useRef(null);
    const logoRef = useRef(null);
    useEffect(() => {
        let topDelta = 1;
        let leftDelta = 1;

        const screen = screenRef.current;
        const main = mainRef.current;
        const logo = logoRef.current;

        // Safety check: making sure the elements exist
        if (!screen || !logo || !main) return;

        // Start the animation interval
        const animInterval = setInterval(() => {
            // get current coordinates of logo
            const currentTop = parseInt(logo.style.top) || 0;
            const currentLeft = parseInt(logo.style.left) || 0;
            const currentRight = currentLeft + logo.clientWidth;
            const currentBottom = currentTop + logo.clientHeight;
            const currentCenter = {
                tb: currentTop + logo.clientHeight / 2,
                lr: currentLeft + logo.clientWidth / 2
            };
            // get current coordinates of main
            let mainPosition = main.getBoundingClientRect();
            // on touching main 
            if (currentCenter.tb >= mainPosition.top && currentCenter.tb <= mainPosition.bottom &&
                currentCenter.lr >= mainPosition.left && currentCenter.lr <= mainPosition.right) {
                // calculate distances from logo to side
                const distances = {
                    top: Math.abs(currentCenter.tb - mainPosition.top),
                    bottom: Math.abs(currentCenter.tb - mainPosition.bottom),
                    left: Math.abs(currentCenter.lr - mainPosition.left),
                    right: Math.abs(currentCenter.lr - mainPosition.right)
                };
                // find the smallest distance value
                const closestSide = Object.keys(distances).reduce((a, b) => distances[a] < distances[b] ? a : b);
                // apply logic based on the closest side
                if (closestSide === 'top') topDelta = -1;
                if (closestSide === 'bottom') topDelta = 1;
                if (closestSide === 'left') leftDelta = -1;
                if (closestSide === 'right') leftDelta = 1;
                console.log(`Closest to the ${closestSide} of main`);
            }

            // on touching the edges of the screen
            if (currentBottom >= screen.clientHeight) topDelta = -1;
            if (currentTop <= 0) topDelta = 1;
            if (currentRight >= screen.clientWidth) leftDelta = -1;
            if (currentLeft <= 0) leftDelta = 1;

            logo.style.top = currentTop + topDelta + 'px';
            logo.style.left = currentLeft + leftDelta + 'px';
        }, 15);

        // Cleanup
        return () => clearInterval(animInterval);
    }, [screenRef, logoRef]);

    return (
    <>
        <img className="background-texture" src={paperTexture} alt=""/>
        <div className="home" ref={screenRef}>
            <img className="home-logo" src={reactLogo} alt="" ref={logoRef} />
            <main ref={mainRef}>
                <h1>Journal d'apprentissage</h1>
                <h2>Elina Liault - 2026</h2>
                <ButtonNext />
            </main>
        </div>
    </>
    
    )
}