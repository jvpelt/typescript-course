# Features

In deze sectie gaan we door de verschillende features heen die typescript bied.

**Types**

Wanneer we typescript gebruiken krijgen we ook toegang tot de ingebouwde javascript functies. Kijk naar `10.1-types.ts` en daar zien we een aantal objecten.

- Hover over de verschillende statements en zie hoe de typescript compiler je helpt bij de definitie van deze verschillende types.

**annotations**

Deze folder beslaat hoe we annotations kunnen doen in typescript. Annotaties zijn enkel nodig wanneer er geen inference mogelijk is of als het gaat om een return value. In `annotations/variables.ts` zien we annotaties terugkomen van de basic types hier maken we in eerste instantie nog geen gebruik van inference om aan te geven hoe annotaties werken. Op het eind van de file worden de voorbeelden geschetst wanneer er annotaties gebruikt moeten worden.

In `annotations/objects.ts` zien we de kracht van type inference terug. Beide blokken doen hetzelfde aan type safety maar zoals je ziet is de annotatie hier niet nuttig en extra verbose.

Bij `annotations/functions.ts` zie je een aantal functies met de verschillende return values. In de `logWeather` functie heb ik bewust een foutje gezet. Hier zou geen waarde teruggegeven mogen worden. Kijk of je deze middels de bovenstaande voorbeelden en typescript return values kunt fixen.

**Arrays**

Hier in `10.3-arrays.ts` zien we hoe arrays opgebouwd kunnen worden en hoe de compiler vervolgens middels type inference de juiste types bepaald. Ook bij de diverse functies op arrays zoals bijvoorbeeld map zie je dat de compiler begrijpt dat de waarde een string is.

**Tuples**

Tuples zullen we zelf niet vaak gebruiken aangezien ze moeilijker te lezen zijn dan objecten. Echter gebruikt bv `React` deze volop voor bijvoorbeeld hooks. Daarom voor de volledigheid ook een aantal voorbeelden in `10.4-tuples.ts` waarbij we gebruik maken van tuples en hoe we deze kunnen typeren binnen typescript.

**Interfaces**

De interface is wellicht het belangrijkste hulpmiddel binnen typescript. Met een interface zorgen we dat we objecten/classes/functies etc kunnen voorzien van de juiste typedefinities zonder deze te moeten voorzien van verbose type annotaties. In `10.5-interfaces.ts` zie je een voorbeeld terug met interface en zonder interface van `printVehicle`. Verder zie je dat bij functie `printSummary` wanneer je een object aan een functie meegeeft deze niet 1 op 1 gelijk hoeft te zijn aan de interface. De compiler controleert de minimale vereiste van de signature en wanneer deze beschikbaar zijn op het aangeboden object zal deze geen foutmelding geven.

**Classes**

Classes worden binnen Oliver niet vaak meer gebruikt, toch is het volgens de typescript methodology de voorgeschreven route. Er is geen noodzaak om classes te gebruiken met typescript en voor React applicaties zou ik toch de functional components adviseren boven de class based components. Om toch een basis kennis van classes met typescript te hebben zijn er een aantal voorbeelden uiteen gezet in `10.6-classes.ts`.

**Generics**

Generics zijn zoals de naam al aangeeft generieke types. Deze kunnen worden gebruikt om herbruikbare componenten te maken. In het voorbeeld in `10.7-generics.ts` zie je hoe we het voorbeeld van de getting started hebben omgebouwd om generics te gebruiken. De conventie is hier om altijd de letter T te gebruiken en bij een 2e generic de letter K.

**Enumerations**

Enumerations zijn een voorgedefinieerde set aan waarden (constanten) die je een naam en optioneel een waarde kunt geven. In `10.8-enumerations.ts` zie je een aantal voorbeelden van enums en hoe je ze kan gebruiken.

**Utility Types**

Typescript heeft een aantal helpers die je het leven makkelijk kunnen maken bij het definieren van types. Zo hoef je niet voor een functie waarbij je maar een subset aan data wil hebben van een interface een nieuwe interface te definieren maar kun je bijvoorbeeld de `Partial` utility gebruiken. Al deze utilities zijn [hier](https://www.typescriptlang.org/docs/handbook/utility-types.html) terug te vinden.
