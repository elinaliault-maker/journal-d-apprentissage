import ButtonNext from "../ButtonNext";

export default function Chart() {
    return (
    <>
        <h1>Chart.js & Color functions</h1>
        <h2><i>29 Octobre</i></h2>
        <p>Ces derniers jours, à l&#39;entreprise j&#39;ai travaillé sur des graphiques. Nous travaillons en effet sur un fonctionnalité permettant de voir des indicateurs sous forme de graphiques. Pour cela, mon collègue a déterminé les indicateurs et les comparaisons souhaités et fait une première version des graphiques équivalents. </p>
        <p>Une fois que j&#39;ai récupéré ces graphiques, j&#39;ai travaillé sur leur design et leur présentation afin de les aligner l’expérience utilisateur et la charte graphique. Il a été décidé de faire les graphiques en utilisant <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js</a>. Ainsi, j&#39;ai du comprendre le fonctionnement général de cette librairie et la manière dont les options sont définies et imbriquées afin de pouvoir faire les modifications nécessaires.</p>
        <p>Pour appliquer la charte graphique à ces graphiques, j&#39;avais notamment besoin de calculer des teintes des couleurs principales utilisées lorsque différentes informations font partie d&#39;une même catégorie et pour les couleurs de hover. Pour cela, je voulais que ces teintes soit calculées de manière dynamique afin qu&#39;un changement de charte graphique ne nécessite pas de gros changement. J&#39;ai donc écrit des fonctions en JavaScript pour faire ces calculs, en m’appuyant sur <a target="_blank" href="https://medium.com/@carlosabpreciado/adding-tint-shade-dynamically-to-a-color-with-javascript-or-any-language-fa5b51ef5777">cet article</a>.</p>
        <p>Ce projet m&#39;a permis de me familiariser avec une nouvelle librairie et de d&#39;en apprendre plus sur la manière de manipuler des couleurs programmatiquement.</p>
        <ButtonNext />
    </>
    )
}