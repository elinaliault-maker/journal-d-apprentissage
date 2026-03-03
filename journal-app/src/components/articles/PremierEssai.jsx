import ButtonNext from "../ButtonNext"

export default function PremierEssai() {
    return (
    <>
        <h1 id="introduction">React : premier essai</h1>
        <h2><i>2 Octobre</i></h2>
        <p>J&#39;ai parcourue la documentation React avec pour intention de me familiariser avec la syntaxe et l&#39;idée générale. J&#39;aime bien tester en apprenant pour être sûre que j&#39;ai bien compris avant de continuer. J&#39;ai donc testé et bidouillé dans une sandbox (fork de la documentation) ma comprehension de la syntaxe et de l&#39;intégration du style (voir ci-dessous ou en suivant {" "}
            <a href="https://codesandbox.io/p/sandbox/react-dev-forked-nh4867?file=%2Fsrc%2FApp.js%3A26%2C1">ce lien</a>)</p>
        <iframe title="Page web de la sandbox" src="https://codesandbox.io/p/sandbox/react-dev-forked-nh4867?file=%2Fsrc%2FApp.js%3A26%2C1"></iframe>
        <ButtonNext />
    </>
    )
}