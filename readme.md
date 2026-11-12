<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project Status
--------------

[![npm](https://img.shields.io/npm/v/react-generic-dummy?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-generic-dummy)
[![npm downloads](https://img.shields.io/npm/dy/react-generic-dummy.svg?style=for-the-badge)](https://www.npmjs.com/package/react-generic-dummy)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-dummy/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-generic-dummy/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-dummy/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-generic-dummy/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-dummy/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-generic-dummy/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-dummy/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-generic-dummy/actions/workflows/lint.yaml)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-dummy/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-generic-dummy/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-generic-dummy.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-generic-dummy)


<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

A React component which renders nothing but its children inside a "div". It
serves as stand-in for optional dependencies: Let your bundler resolve a
package you do not want to ship to this component instead. Your code keeps
compiling and can find out at runtime that the real component is missing via
the flag "isDummy".
<!--deDE:
    Eine React-Komponente, die nichts außer ihren Kindern in einem "div"
    darstellt. Sie dient als Platzhalter für optionale Abhängigkeiten: Lassen
    Sie Ihren Bundler ein Paket, das Sie nicht ausliefern möchten, stattdessen
    zu dieser Komponente auflösen. Ihr Code lässt sich weiterhin übersetzen und
    kann zur Laufzeit über das Kennzeichen "isDummy" erkennen, dass die echte
    Komponente fehlt.
-->
<!--frFR:
    Un composant React qui n'affiche rien d'autre que ses enfants dans un
    "div". Il sert de substitut pour des dépendances optionnelles: laissez
    votre bundler résoudre vers ce composant un paquet que vous ne souhaitez
    pas livrer. Votre code continue de compiler et peut détecter à l'exécution,
    grâce à l'indicateur "isDummy", que le vrai composant est absent.
-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

Installation
------------

```bash
npm install react-generic-dummy react
```

<!--|deDE:Beispiel-->
<!--|frFR:Exemple-->
Example
-------

Replace an optional animation library with the dummy in your webpack
configuration:
<!--deDE:
    Ersetzen Sie eine optionale Animationsbibliothek in Ihrer
    webpack-Konfiguration durch den Platzhalter:
-->
<!--frFR:
    Remplacez une bibliothèque d'animation optionnelle par le substitut dans
    votre configuration webpack:
-->

```JavaScript
export default {
    resolve: {
        alias: {
            'react-useanimations$': 'react-generic-dummy',
            'react-useanimations/lib/plusToX$': 'react-generic-dummy'
        }
    }
}
```

Check for the flag before using the component:
<!--deDE:Prüfen Sie das Kennzeichen, bevor Sie die Komponente verwenden:-->
<!--frFR:Vérifiez l'indicateur avant d'utiliser le composant:-->

```TypeScript
import type Dummy from 'react-generic-dummy'
import UseAnimations from 'react-useanimations'
import plusToX from 'react-useanimations/lib/plusToX'

export const Icon = () =>
    (UseAnimations as Partial<typeof Dummy>).isDummy ?
        <span>+</span> :
        <UseAnimations animation={plusToX} />
```

In tests the exported object "reference" holds the last reference passed to
the dummy, so you can check what a component forwards to its child.
<!--deDE:
    In Tests enthält das exportierte Objekt "reference" die zuletzt an den
    Platzhalter übergebene Referenz, sodass Sie prüfen können, was eine
    Komponente an ihr Kind weiterreicht.
-->
<!--frFR:
    Dans les tests, l'objet exporté "reference" contient la dernière
    référence transmise au substitut, ce qui permet de vérifier ce qu'un
    composant transmet à son enfant.
-->

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn build
yarn check
```
