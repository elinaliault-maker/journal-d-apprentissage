import { DOMAINE, AllLinks } from "./sommaireVariables";

export default function goToNextArticle() {
    let currentUrl = window.location.href;
    if (currentUrl === DOMAINE) {
        return AllLinks[0]
    }

    let urlSlices = currentUrl.split('/');
    let currentArticle = urlSlices[3];
    for (let i = 0; i < AllLinks.length; i++) {
        if (currentArticle === AllLinks[i].url){
            return AllLinks[i + 1]
        }
    }
    
}