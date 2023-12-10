import { Character } from "./classCharacter.js";

export class Bowerman extends Character {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

//const bowman = new Bowerman("Bro", "Bowman");
