# Tutoriel React ToDoList
*23 Janvier*

Cette semaine, j'ai réalisé le tutoriel react de MDN[^1], qui visait à créer une application de to-do list basic, dans une sandbox[^2]. 

<iframe title="Page web de la sandbox" src="https://codesandbox.io/p/sandbox/todo-tuto-2z7kvd?file=%2Fsrc%2FApp.js"></iframe>

J'ai modifié une petite partie pour l’adapter à l’environnement de la sandbox : j'ai remplacé la librairie `nanoid` par `Date.now()`[^3] pour la création d'une clé unique, car ne pouvant pas installer une librairie dans une sandbox j'ai pensé qu'un timestamp suffirait pour ce contexte d'utilisation.

J'ai commencé le tuto en essayant de suivre les étapes et de comprendre les explications et j'ai fini en comprenant généralement la logique et en étant à peu près capable d'écrire le code correspondant à l'explication textuelle. 

Cependant, je trouve que je ne suis pas encore très à l'aise avec la logique globale au niveau de l'app et de comment séparer correctement et organiser le code etc... C'est pour cela qu'il me semble important de continuer de pratiquer ces concepts dans un premiers temps pour être bien confiante sur les bases et l'organisation avant d'avancer plus. Pour cela, je pense faire le tuto de la documentation react ensuite.

[^1]: Ce que j'appelle le tutoriel react de MDN comprend, dans l'ordre, les 7 articles suivant : 
[Getting started with React](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), 
[Beginning our React ToDo app](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning), 
[Componentizing our React app](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components), 
[React interactivity: Events and state](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state), 
[React interactivity: Editing, filtering, conditional rendering](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering), 
[Accessibility in React](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility), 
[React resources](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
[^2]: Étant donné que j'utilisais un ordinateur qui n'était pas le mien, je n'ai pas voulu activer la possibilité d'exécuter des scripts. Je ne pouvais donc pas exécuter les commandes `npm` nécessaires pour créer l'app et lancer le serveur de dev.
[^3]: [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)