import {
  Character,
  nameLengthErrorMessage,
  nameStringErrorMessage,
  typeErrorMessage,
  levelUpErrorMessage,
} from "../classCharacter.js";

test("check className", () => {
  const character = new Character("B", "Bowman", 25, 25);
  try {
    character.check();
  } catch (error) {
    expect(error.message).toBe(nameLengthErrorMessage);
    return;
  }
  expect(1).toBe("Метод check у класса Character сработал не корректно");
});

test("check nameIsString", () => {
  const character = new Character(2, "Bowman", 25, 25);
  try {
    character.check();
  } catch (error) {
    expect(error.message).toBe(nameStringErrorMessage);
    return;
  }
  expect(1).toBe("Метод check у класса Character сработал не корректно");
});

test("check type", () => {
  const character = new Character("Bro", "Bowman ", 25, 25);
  try {
    character.check();
  } catch (error) {
    expect(error.message).toBe(typeErrorMessage);
    return;
  }
  expect(1).toBe("Метод check у класса Character сработал не корректно");
});

test("check damage", () => {
  const character = new Character("Bro", "Bowman", 25, 25);
  character.damage(50);
  expect(character.health).toBe(62.5);
});

test("check LevelUp", () => {
  const character = new Character("Bro", "Bowman", 25, 25);
  character.health = 0;
  try {
    character.levelUp();
  } catch (error) {
    expect(error.message).toBe(levelUpErrorMessage);
    return;
  }
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.health).toBe(100);
  expect(character.level).toBe(2);
});
