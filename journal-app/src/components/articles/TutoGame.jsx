import ButtonNext from "../ButtonNext";

export default function TutoGame() {
    return (
    <>
        <h1>Tutoriel React Tic Tac Toe</h1>
        <h2><i>5 Février</i></h2>
        <p>Les 2 dernières semaines, j'ai travaillé sur le <a target="_blank" href="https://react.dev/learn/tutorial-tic-tac-toe">tutoriel dans la documentation React</a> pour construire un jeu de tic tac toe.</p>
        <p>J'ai honnêtement eu plus de difficultés à suivre ce tuto que celui de MDN. Parfois allant trop lentement, parfois trop vite ; supposant des connaissances ou une compréhension des détails qui n'était pas forcément évidente. Sur le MDN, je pouvais toujours consulter les articles liés et la documentation approfondie si j'avais un doute ou que je ne comprenais pas bien, ce que je ne pouvais pas faire sur la doc React.</p>
        <p>Cependant, je pense que le tuto précédent m'a bien aidé à comprendre et à suivre ce tuto, car même si la manière d'expliquer ne me convenait pas très bien, j'ai quand même compris et réussi à suivre.</p>
        <p>J'ai, par ailleurs, réalisé cet exercice en local (grâce aux <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started#setting_up_your_first_react_app">explications de setup</a> de MDN et sur la base de la template React de vite). Cela m'a permis de pratiquer React dans mon éditeur de code et de pratiquer le debug avec <code>npm run dev</code>.</p>
        <p>Après le tutoriel, je me suis essayé aux améliorations proposées à la fin de celui-ci. J'ai ainsi pu écrire du code par moi-même et mieux prendre en main les concepts utilisés et appris au cours des dernières semaines.</p>
        <ButtonNext />
    </>
    )
}