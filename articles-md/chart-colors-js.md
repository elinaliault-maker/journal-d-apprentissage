# Chart.js & Color functions
*29 Octobre*

Ces derniers jours, à l'entreprise j'ai travaillé sur des graphiques. Nous travaillons en effet sur un fonctionnalité permettant de voir des indicateurs sous forme de graphiques. Pour cela, mon collègue a déterminé les indicateurs et les comparaisons souhaités et fait une première version des graphiques équivalents. 

Une fois que j'ai récupéré ces graphiques, j'ai travaillé sur leur design et leur présentation afin de les aligner l’expérience utilisateur et la charte graphique. Il a été décidé de faire les graphiques en utilisant [Chart.js](https://www.chartjs.org/docs/latest/). Ainsi, j'ai du comprendre le fonctionnement général de cette librairie et la manière dont les options sont définies et imbriquées afin de pouvoir faire les modifications nécessaires.

Pour appliquer la charte graphique à ces graphiques, j'avais notamment besoin de calculer des teintes des couleurs principales utilisées lorsque différentes informations font partie d'une même catégorie et pour les couleurs de hover. Pour cela, je voulais que ces teintes soit calculées de manière dynamique afin qu'un changement de charte graphique ne nécessite pas de gros changement. J'ai donc écrit des fonctions en JavaScript pour faire ces calculs, en m’appuyant sur [cet article](https://medium.com/@carlosabpreciado/adding-tint-shade-dynamically-to-a-color-with-javascript-or-any-language-fa5b51ef5777).

Ce projet m'a permis de me familiariser avec une nouvelle librairie et de d'en apprendre plus sur la manière de manipuler des couleurs programmatiquement.