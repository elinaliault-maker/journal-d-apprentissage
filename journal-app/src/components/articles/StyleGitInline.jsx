import ButtonNext from "../ButtonNext";

export default function StyleGitInline() {
    return (
    <>
        <h1>Style et Git inline</h1>
        <h2><i>11 Janvier</i></h2>
        <p>Cette semaine, j'ai travaillé sur les articles pour ce présent journal, notamment dans l'objectif du rendu. 
            <br/>J'ai une préférence pour écrire les textes de ces articles en Markdown, simplement parce que c'est plus simple pour moi de voir le contenu de ce que je suis en train d'écrire et de gérer la rédaction.
            <br/>Cependant, le rendu de ce journal étant en ligne, j'ai décidé de transformer ces textes en HTML afin de pouvoir créer un site en de cette façon. J'ai aussi travaillé sur le style (en CSS) afin de rendre le tout plus lisible.
            <br/>J'ai pour idée de pouvoir faire les pages au fur et à mesure et donc avec des connaissances en évolutions. Ainsi, je n'ai pas finalisé certains éléments comme la manière de passer d'un article à l'autre et je trouverais ça intéressant de voir si je peux le faire en React à la fin de cet apprentissage.</p>
        <p>J'ai aussi profité de cet environnement de travail (le repository du journal ouvert dans VS Code) pour m'entraîner sur les commandes git inline telles que : <code>git status</code>, <code>git add</code>, <code>git commit</code>, <code>git stash</code>...
            <br/>J'ai trouvé qu'une fois que j'ai pris la main de les utiliser, ça ne m'a pas semblé si compliqué. Je m'aide aussi de 
            {" "} <a href="https://tldr.sh/" target="_blank">tldr</a> dans mon terminal dès que j'ai un doute sur la syntaxe ou que j'ai besoin de documentation courte sur les commandes git.</p>
        <ButtonNext />
    </>
    )
}