import paperTexture from '../assets/paper-texture.jpg'
import { Outlet, Link } from "react-router";
import "../app.css"

function LayoutArticle() {
  return (
    <>
    <img id="background-texture" src={paperTexture} alt=""/>
    <main className="markdown">
      <Outlet />
    </main>
    </>
    
  )
}

export default LayoutArticle