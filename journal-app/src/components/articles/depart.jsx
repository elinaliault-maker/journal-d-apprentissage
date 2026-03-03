import ButtonNext from "../ButtonNext"

export default function Depart() {
    return (
        <>
            <h1>D'où je pars</h1>
            <p>Pour recontextualiser mes connaissances en code avant de commencer cet apprentissage, je vous propose de faire le point sur ce que je sais déjà. </p>
            <p>J&#39;ai appris le HTML et CSS et des débuts de JavaScript après le lycée, en utilisant majoritairement les articles sur le site du <a target="_blank" href="https://developer.mozilla.org/en-US/">MDN</a> et en m&#39;entraînant sur des petits projets.</p>
            <p>J&#39;ai ensuite pu approfondir ces languages, notamment le JavaScript, durant mon DNMADE<sup><a href="#footnote-1">1</a></sup>. Nous avions en effet des cours de programmation durant lesquels nous développions nos projets réalisés pendant les cours de création. Suivant les projets, le développement aboutissait à un prototype soit graphique soit fonctionnel.</p>
            <p>Cet enseignement m&#39;a aussi donnée l&#39;occasion d&#39;apprendre les bases de Unity et de sa programmation en C# avec pour finalité le développement d&#39;un projet dans cette technologie.</p>
            <p>Durant cette période, j&#39;ai réalisé un stage à la MAIF. Celui-ci m&#39;a beaucoup appris sur le design système (le cœur de métier de l&#39;équipe dans laquelle je travaillais) mais aussi, grâce à la pluridisciplinarité des profils de mes collègues, j&#39;ai pu entrevoir d&#39;autres fonctionnements et techniques de dev. En conséquence, cela m&#39;a donné envie d&#39;en apprendre plus. J&#39;ai donc profité de cet été pour apprendre le Markdown, le Pug et m&#39;exercer sur le JavaScript. J&#39;ai notamment écrit un site de To-Do Liste pour m&#39;entraîner sur l&#39;utilisation du local storage et la manipulation de JSON en JavaScript.</p>
            <p>Après mon DNMADE, j&#39;ai ainsi intégré le Master ECNI à Gobelins et l&#39;entreprise Fidatech dans laquelle je suis en alternance. Durant ces années, je n&#39;ai pas vraiment eu l&#39;occasion de pratiquer le développement en cours mais j&#39;ai participé à certains projets au travail.</p>
            <p>J&#39;ai, par exemple, réalisé des templates HTML avec du Jinja2 (appris pour l&#39;occasion), l&#39;idée étant qu&#39;elles puissent être remplis avec des donnés d&#39;un dictionnaire python puis transformer en PDFs. Le CSS a d&#39;ailleurs été un challenge car il a fallu trouver des solution de contournement et éviter tout CSS &quot;modern&quot; afin de permettre à wkhtmltopdf (le programme utilisé pour transformer les HTML en PDFs) d&#39;interpréter correctement le style.</p>
            <p>Voila globalement d&#39;où je pars. Donc c&#39;est parti !</p>
            <ButtonNext />
            <div id="footnotes">
                <hr/>
                <p id="footnote-1">1. Diplôme National des Métiers d&#39;Art et de Design</p>
            </div>
        </>
    )
}