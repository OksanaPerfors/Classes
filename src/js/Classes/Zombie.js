import { Character } from "./classCharacter.js";

class Zombie extends Character {
  constructor(name, type = "Zombie") {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

const zombie = new Zombie("Zoui", "Zombie");
