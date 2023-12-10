import { Character } from "./classCharacter.js";

class Magician extends Character {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

// const magician = new Magician("Mag", "Magician");
