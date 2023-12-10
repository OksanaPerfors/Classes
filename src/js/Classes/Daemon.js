import { Character } from "./classCharacter.js";

class Daemon extends Character {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

// const daemon = new Daemon("Den", "Daemon");
