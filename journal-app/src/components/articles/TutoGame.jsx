import ButtonNext from "../ButtonNext";

export default function TutoGame() {
    return (
    <>
        <h1>Tutoriel React Tic Tac Toe</h1>
        <h2><i>5 Février</i></h2>
        <p>Les 2 dernières semaines, j&#39;ai travaillée sur le <a href="https://react.dev/learn/tutorial-tic-tac-toe">tutoriel dans la documentation React</a> pour construire un jeu de tic tac toe.</p>
        <p>J&#39;ai honnêtement eu plus de difficultés à suivre ce tuto que celui de MDN. Parfois allant trop lentement, parfois trop vite; supposant des connaissances ou une compréhension des détails qui n&#39;était pas forcément évidente. Sur le MDN, je pouvais toujours consulté les articles liés et la documentation approfondie si j&#39;avais un doute ou que je ne comprenais pas bien, ce que je ne pouvais pas faire sur la doc React.</p>
        <p>Cependant, je pense que le tuto précédent m&#39;a bien aidé à comprendre et suivre ce tuto car même si la manière d&#39;expliquer ne me convenait pas très bien, j&#39;ai quand même compris et réussi à suivre.</p>
        <p>J&#39;ai, par ailleurs, réalisé cet exercice en local (grâce aux <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started#setting_up_your_first_react_app">explications de setup</a> de MDN et sur la base de la template react de vite). Cela m&#39;a permis de pratiquer react dans mon éditeur de code et de pratiquer le debug avec <code>npm run dev</code>.</p>
        <p>Après le tutoriel, je me suis essayé aux améliorations proposées à la fin de celui-ci. J&#39;ai ainsi pu écrire du code par moi-même et mieux prendre en main les concepts utilisés et appris au cours des dernières semaines.</p>
        <ButtonNext />
    </>
    )
}