import { Character } from "./classCharacter.js";

class Swordsman extends Character {
  constructor(name, type = "Swordsman") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

// const swordsman = new Swordsman("Sword", "Swordsman");
