import { DOMAINE, AllLinks } from "./sommaireVariables";

export default function goToNextArticle() {
    let currentUrl = window.location.href;
    // if home send to first link/article
    if (currentUrl === DOMAINE || currentUrl === `${DOMAINE + "#/"}`) {
        return AllLinks[0]
    }

    let urlSlices = currentUrl.split('/');
    let urlRouteNumber = DOMAINE.split("/").length;
    let currentArticle = urlSlices[urlRouteNumber];
    for (let i = 0; i < AllLinks.length; i++) {
        if (currentArticle === AllLinks[i].url){
            return AllLinks[i + 1]
        }
    }

    console.log("URL doesn't fit goToNextArticle.js constraints")
    return AllLinks[0];
    
}