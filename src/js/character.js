import { Character } from "./classCharacter.js";

export default function character(parm) {
  if (parm.health > 50) {
    return "healthy";
  } else if (parm.health <= 50 && parm.health >= 15) {
    return "wounded";
  } else {
    return "critical";
  }
}

export const charactersStatus = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

export function compare(charactersStatus) {
  return charactersStatus.sort((a, b) => b.health - a.health);
}

class Bowerman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const bowman = new Bowerman("Bro", "Bowman", 25, 25);

class Swordsman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const swordsman = new Swordsman("Sword", "Swordsman", 40, 10);

class Magician extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const magician = new Magician("Mag", "Magician", 10, 40);

class Daemon extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const daemon = new Daemon("Den", "Daemon", 10, 40);

class Undead extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const undead = new Undead("Death", "Undead", 25, 25);

class Zombie extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.check();
  }
}

const zombie = new Zombie("Zoui", "Zombie", 40, 10);
