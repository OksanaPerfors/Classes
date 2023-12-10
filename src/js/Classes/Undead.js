import { Character } from "./classCharacter.js";

class Undead extends Character {
  constructor(name, type = "Undead") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

// const undead = new Undead("Death", "Undead");
