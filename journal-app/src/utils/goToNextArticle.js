const DOMAINE = "http://localhost:3000/"
const SOMMAIRE = [
  { "titre": "Introduction", "url": "intro"},
  { "titre": "D'où je pars", "url": "depart"},
  { "titre": "React test", "url": "react-test"},
  { "titre": "GitHub, github desktop, git", "url": "learning-git"},
  { "titre": "Accueil", "url": ""}
]

export default function goToNextArticle() {
    let currentUrl = window.location.href;
    if (currentUrl === DOMAINE) {
        return SOMMAIRE[0]
    }

    let urlSlices = currentUrl.split('/');
    let currentArticle = urlSlices[3];
    for (let i = 0; i < SOMMAIRE.length; i++) {
        if (currentArticle === SOMMAIRE[i].url){
            return SOMMAIRE[i + 1]
        }
    }
    
}