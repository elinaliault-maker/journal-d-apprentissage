const DOMAINE = "http://localhost:3000/"
export const SOMMAIRE = [
  { "titre": "Introduction", "url": "intro" },
  { "titre": "D'où je pars", "url": "depart" },
  { "titre": "React : premier essai", "url": "premier-essai" },
  { "titre": "GitHub, github desktop, git", "url": "learning-git" },
  { "titre": "Chart.js & Color functions", "url": "chart" },
  { "titre": "Side Quest", "url": "side-quest"},
  { "titre": "Style et Git inline", "url": "style-git-inline"},
  { "titre": "Documentation overview", "url": "doc-overview"},
  { "titre": "Tutoriel React ToDoList", "url": "tuto-todo"},
  { "titre": "Tutoriel React Tic Tac Toe", "url": "tuto-game" },
  { "titre": "Traduire le journal en React", "url": "journal-react" },
  { "titre": "Retour à l'accueil", "url": ""}
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