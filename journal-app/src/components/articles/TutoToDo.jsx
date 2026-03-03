import ButtonNext from "../ButtonNext";

export default function TutoToDo() {
    return (
    <>
       <h1>Tutoriel React ToDoList</h1>
        <h2><i>23 Janvier</i></h2>
        <p>Cette semaine, j&#39;ai réalisé le tutoriel react de MDN<sup><a href="#footnote-1">1</a></sup>, qui visait à créer une application de to-do list basic, dans une sandbox<sup><a href="#footnote-2">2</a></sup>. </p>
        <iframe title="Page web de la sandbox" src="https://codesandbox.io/p/sandbox/todo-tuto-2z7kvd?file=%2Fsrc%2FApp.js"></iframe>
        <p>J&#39;ai modifié une petite partie pour l&#39;adapter à l&#39;environnement de la sandbox : j&#39;ai remplacé la librairie <code>nanoid</code> par <code>Date.now()</code><sup><a href="#footnote-3">3</a></sup> pour la création d&#39;une clé unique, car ne pouvant pas installer une librairie dans une sandbox j&#39;ai pensé qu&#39;un timestamp suffirait pour ce contexte d&#39;utilisation.</p>
        <p>J&#39;ai commencé le tuto en essayant de suivre les étapes et de comprendre les explications et j&#39;ai fini en comprenant généralement la logique et en étant à peu près capable d&#39;écrire le code correspondant à l&#39;explication textuelle. </p>
        <p>Cependant, je trouve que je ne suis pas encore très à l&#39;aise avec la logique globale au niveau de l&#39;app et de comment séparer correctement et organiser le code etc... C&#39;est pour cela qu&#39;il me semble important de continuer de pratiquer ces concepts dans un premiers temps pour être bien confiante sur les bases et l&#39;organisation avant d&#39;avancer plus. Pour cela, je pense faire le tuto de la documentation react ensuite.</p>
        <ButtonNext />
        <div id="footnotes">
            <hr/>
            <p id="footnote-1">1. Ce que j&#39;appelle le tutoriel react de MDN comprend, dans l&#39;ordre, les 7 articles suivant : 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started">Getting started with React</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning">Beginning our React ToDo app</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components">Componentizing our React app</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state">React interactivity: Events and state</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility">Accessibility in React</a>, 
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources">React resources</a>
            </p>
            <p id="footnote-2">2. Étant donné que j&#39;utilisais un ordinateur qui n&#39;était pas le mien, je n&#39;ai pas voulu activer la possibilité d&#39;exécuter des scripts. Je ne pouvais donc pas exécuter les commandes <code>npm</code> nécessaires pour créer l&#39;app et lancer le serveur de dev.</p>
            <p id="footnote-3">3. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now">Date.now()</a></p>
        </div> 
    </>
    )
}