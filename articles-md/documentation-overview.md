# Documentation overview
*19 Janvier*

Depuis la semaine dernière, j'ai continué d'utiliser les lignes de commandes git plutôt que les actions graphiques. 

J'ai aussi appris quelques commandes bash[^1] pour se déplacer et manipuler des fichiers comme : 
- `cd` : se déplacer dans l'arbre de fichiers
- `mkdir` : créer un dossier
- `mv` : déplacer (ou renommer) un/des fichiers
- `touch` : créer un fichier

[^1]: Étant sur Windows, j'utilise git bash comme terminal afin d'éviter de faire la conversion entre bash et powershell et d'apprendre les commandes dans un language plus standard.

J'ai aussi commencer à réfléchir aux projects que je compte intégrer dans mon portfolio et lesquels seraient stratégiquement les plus percutants et les plus alignés avec le type de postes que je vise.

En lisant la documentation react quand j'ai fait mes premiers essais, j'ai eu beaucoup de mal à comprendre la partie setup et j'ai eu l'impression que cela était compliqué et que j'allais avoir du mal à le faire en plus d'avoir du mal à comprendre. Cependant, en lisant l'article [Getting started with React ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) de MDN, j'ai compris sans problème particulier. Je pense que la différence majeure est que MDN assume un niveau de départ plus bas (et renvoie vers les articles des prérequis etc...) et potentiellement aussi que la manière d'expliquer me convient juste mieux. Quoi qu'il en soit, faire le setup react et commencer à suivre le tuto d'apprentissage des bases est mon objectif pour les jours à venir.

J'ai profiter du momentum que j'avais par rapport à la lecture de documentation pour lire [JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview). Mon objectif était de rafraîchir mes connaissances en JavaScript mais surtout d'acquérir une connaissance (au moins de surface) des sujets que je n'ai pas encore rencontrer.

Mes notes :
- Opérateurs logiques avec un comportement de court-circuit[^2] [^3]
    const a = 0 && "Hello"; // 0 because 0 is "falsy"
    const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
- `if...else` syntaxe en utilisant des opérateurs[^4]
    condition ? exprIfTrue : exprIfFalse
- `try...catch`[^5] and `throw`[^6]
- Arrow fonctions[^7]
- Classes[^8]
- Asynchronous programming[^9]


[^2]: [Binary logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)
[^3]: [Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
[^4]: [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
[^5]: [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
[^6]: [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
[^7]: [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[^8]: [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
[^9]: [Asynchronous programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#asynchronous_programming)