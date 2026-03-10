import ButtonNext from "../ButtonNext";

export default function Chart() {
    return (
    <>
        <h1>Chart.js & Color functions</h1>
        <h2><i>29 Octobre</i></h2>
        <p>Ces derniers jours, à l'entreprise, j'ai travaillé sur des graphiques. Nous travaillons en effet sur une fonctionnalité permettant de voir des indicateurs sous forme de graphiques. Pour cela, mon collègue a déterminé les indicateurs et les comparaisons souhaités et fait une première version des graphiques équivalents. </p>
        <p>Une fois que j'ai récupéré ces graphiques, j'ai travaillé sur leur design et leur présentation afin de les aligner l'expérience utilisateur et la charte graphique. Il a été décidé de faire les graphiques en utilisant <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js</a>. Ainsi, j'ai dû comprendre le fonctionnement général de cette librairie et la manière dont les options sont définies et imbriquées afin de pouvoir faire les modifications nécessaires.</p>
        <p>Pour appliquer la charte graphique à ces graphiques, j'avais notamment besoin de calculer des teintes des couleurs principales utilisées lorsque différentes informations font partie d'une même catégorie et pour les couleurs de hover. Pour cela, je voulais que ces teintes soient calculées de manière dynamique afin qu'un changement de charte graphique ne nécessite pas de gros changement. J'ai donc écrit des fonctions en JavaScript pour faire ces calculs, en m’appuyant sur <a target="_blank" href="https://medium.com/@carlosabpreciado/adding-tint-shade-dynamically-to-a-color-with-javascript-or-any-language-fa5b51ef5777">cet article</a>.</p>
        <p>Ce projet m'a permis de me familiariser avec une nouvelle librairie et d'en apprendre plus sur la manière de manipuler des couleurs programmatiquement.</p>
        <ButtonNext />
    </>
    )
}