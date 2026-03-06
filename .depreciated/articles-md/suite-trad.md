# Suite du développement
## *5 Mars*

Cette semaine, j'ai fixé les quelques bugs que j'avais et j'ai développé les fonctionnalités qu'il me manquait pour arriver au rendu que je voulais. 

J'ai commencé par faire en sorte que le navigateur réinitialiser le scroll (remette en haut) à chaque changement de route[^1]. 
J'en ai aussi profité pour faire des améliorations sur le design et le style du site. 
[^1]: Je me suis appuyée sur l'article [How to Scroll to Top on Route Change With React Router Dom v6](https://www.matthewhoelter.com/2022/04/02/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6.html)

Ensuite, j'ai développé un composant `Sommaire` pour permettre de naviguer entre les différents articles dans n'importe quel ordre. Pour cela, je me suis appuyée sur le tableau d'objets créer pour `BoutonNext`. 

Enfin, j'ai voulu rendre ma page d'accueil un peu plus intéressante. Je souhaitais réaliser une animation inspirée du logo DVD qui rebondis sur les coins de l'écran mais avec le logo React. Pour cela, je me suis inspirée de l'article [Old School Tech: How to Animate The Classic DVD Logo Bouncing](https://dev.to/thormeier/old-school-tech-how-to-animate-the-classic-dvd-logo-bouncing-11d9), que j'ai adapté à React. J'ai utilisé `useRef()` pour récupérer les éléments dans le DOM et `useEffect()` pour effectuer l'animation une fois le DOM généré. J'ai ajouté une partie pour détecter l'élément qui contient le texte et faire rebondir le logo sur ces bords aussi. Voila, voila, ça bouge !