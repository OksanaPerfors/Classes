export class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
  check() {
    if (typeof this.name !== "string") {
      throw new Error("name must be string");
    }
    if (this.name.length < 2 || this.name.length >= 10) {
      throw new Error("name must be longer than 2 and shoter than 10 symbols");
    }
    if (
      this.type !== "Bowman" &&
      this.type !== "Swordsman" &&
      this.type !== "Magician" &&
      this.type !== "Daemon" &&
      this.type !== "Undead" &&
      this.type !== "Zombie"
    ) {
      throw new Error("Wrong type");
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      (this.attack += this.attack * 0), 2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error("нельзя повысить левел умершего");
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health = health -= points * (1 - defence / 100);
    }
  }
}
