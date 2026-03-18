import ButtonNext from "../ButtonNext";
import courbeApprentissage from '../../assets/courbe-apprentissage.png'

export default function Conclu() {
    return (
    <>
        <h1>Conclusion</h1>
        <p>Ce journal d'apprentissage m'a donné l'occasion de m'intéresser à des compétences que je voulais apprendre
            depuis un moment déjà. Il m'a ainsi permis de réaliser ce site, pas à pas, en consolidant les compétences 
            déjà acquises et en apprenant toutes celles qui me semblait nécessaire pour arriver à faire ce que je voulais faire. 
        </p>
        <p>Ci-dessous, la représentation graphique de mon apprentissage dans le temps :
        <img src={courbeApprentissage} className="courbeLearning" alt="Courbes de mes apprentissages" />
        </p>
        <p>
            Je considère que j'ai réussi à apprendre les compétences que je cherchais à maîtriser et le niveau que je cherchais à atteindre.
            De même, l'organisation que j'ai suivie me parait tout particulièrement appropriée, car j'ai suivi la manière dont mon 
            cerveau fonctionne et souhaitait apprendre. Cela m'a notamment permis de relever que j'ai souvent besoin de comprendre
            pourquoi je fais quelque chose avant de le faire, d'en comprendre le fonctionnement et les mécaniques.
            Ce projet m'a aussi aidé à consolider ma capacité à apprendre par moi-même. 
            <br />C'est pourquoi je suis particulièrement contente du rendu et du résultat de ce projet.
        </p>
        <p>Et ce n'est que le début ! 
            <br />J'ai hâte de pouvoir mettre ces nouvelles compétences
            au service de la réalisation de mon portfolio et bien d'autres projets, je l'espère.
        </p>
        <ButtonNext />
    </>
    )
}