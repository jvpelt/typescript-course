// Enum in zijn meest basale vorm - de waarde is een 0 index nummer
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// We kunnen de start waarde beinvloeden door het eerste element een waarde te geven
// Hover over de andere keywords en zie dat deze nu waarde 12 / 13 / 14 hebben
enum StartDirection {
  Up = 11,
  Down,
  Left,
  Right,
}

// Dit is wellicht de meest gebruikte manier van constanten definieren met deze
// manier heb je tijdens debugging altijd een iets zeggende waarde
enum AssignedStringValuesDirection {
  Up = 'BOVEN',
  Down = 'ONDER',
  Left = 'LINKS',
  Right = 'RECHTS',
}


// in onderstaande voorbeelden zien we hoe we de enum, of een subset ervan, kunnen gebruiken in een interface
interface Plane {
  direction: Direction;
}

interface Elevator {
  direction: Direction.Up | Direction.Down;
}

interface Car {
  direction: Direction.Left | Direction.Right;
}
