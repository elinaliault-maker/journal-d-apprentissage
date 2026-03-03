import paperTexture from '../assets/paper-texture.jpg'
import { Outlet, Link } from "react-router";
import AccordionSummary from './AccordionSummary';
import "../app.css"

function LayoutArticle() {
  return (
    <>
    <img className="background-texture" src={paperTexture} alt=""/>
    <div className='container'>
      <AccordionSummary />
      <main className="markdown">
        <Outlet />
      </main>
    </div>
    
    </>
    
  )
}

export default LayoutArticle