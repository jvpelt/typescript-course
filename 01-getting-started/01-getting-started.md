# Getting started

1. Installeer typescript -> yarn global add typescript ts-node
2. Check of het werkt -> tsc --help

Nu gaan we een eerste applicatie maken waarbij we inzicht krijgen hoe de compiler werkt en om de kracht van typescript te tonen tijdens development.

**Compiler**

Laten we beginnen met het bestand `compiler.ts`. Hierin zien we een simpele netwerk call die een todo ophaalt en vervolgens de data wegschrijft naar de console. Er zit nog geen typescript specifieke logica in deze is enkel om te laten zien hoe de compiler werkt. Voer de volgende commando's uit:

- Open een terminal venster in deze folder.
- Run `tsc compiler.ts`, je ziet dat er nu een compiler.js bestand is gegenereerd.
- Run `node compiler.js`, je ziet nu een console log voorbij komen.
- Run `node compiler.ts`, zoals eerder aangegeven is typescript een tool die gebruikt wordt tijdens development. Dit commando geeft nu dan ook een foutmelding omdat node deze syntax niet begrijpt.
- Run `ts-node compiler.ts`, zoals je ziet worden de `tsc compiler.ts` en de `node compiler.js` gecombineerd met dit commando gedurende de runtime.

**Errors**
We komen verderop terug op de verschillende types binnen typescript dit is enkel een voorbeeld om te laten zien wat de kracht van typescript is. Ga nu naar de `errors.ts` hierin zien we dezelfde todo call maar dan met een destructuring van de props. Voer nu de volgende commando's uit:

- Open een terminal venster in deze folder.
- Run `ts-node errors.ts`. Hier zien we nu 3 maal undefined terugkomen omdat we een aantal typos hebben gemaakt.
- Ga nu naar file `errors-interface.ts`, hier zie je dat er een interface is toegevoegd met de daadwerkelijke definitie van de todo. Deze interface wordt gebruikt om een zogenaamde type assertion te doen op regel 12. Je ziet nu in de destructuring 3 fouten terugkomen. En dat is de kracht van typescript.
- Werk nu de fouten weg en run `ts-node errors-interface.ts`
