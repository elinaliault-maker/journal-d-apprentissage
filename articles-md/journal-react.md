# Traduire le journal en React
*20 Février*

Cette semaine, j'ai lu [Thinking in React](https://react.dev/learn/thinking-in-react) et [la documentation de React Router](https://reactrouter.com/home) afin de mieux comprendre comment réaliser mon propre projet avec plusieurs pages. 

Pour réaliser ce journal, j'ai décidé d'opter pour le mode [Declarative](https://reactrouter.com/start/modes#declarative) de React Router car cela me semblait plus adapté à l'utilisation que j'allais en faire et plus facile à comprendre avec les concepts que je maîtrise à l'heure actuelle.

J'ai donc poursuivis en créant les bases de mon app React. J'ai traduit mes articles en React (chaque article correspond à un composant) et commencé à mettre en place les routes pour chaque page. 

J'ai aussi créé un composant BoutonNext qui permet de passer à l'article suivant. Le bouton appel une fonction qui s'appuie sur un tableau d'objets (qui contiennent chacun le titre et l'url d'un article et sont rangé par ordre de lecture) et en récupérant la route dans l'url actuelle, renvoie la route et le titre de l'article suivant au bouton. Cela me permet donc d'avoir un bouton à la fin de chaque article qui permet de naviguer au suivant, tout ça en un seul composant.