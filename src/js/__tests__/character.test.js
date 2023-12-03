import character from "../character.js";
import { compare } from "../character.js";
import { charactersStatus } from "../character.js";

test("check healthy", () => {
  const characterStatus = character({ name: "Маг", health: 90 });
  expect(characterStatus).toBe("healthy");
});

test("check wounded", () => {
  const characterStatus = character({ name: "Маг", health: 50 });
  expect(characterStatus).toBe("wounded");
});

test("check critical", () => {
  const characterStatus = character({ name: "Маг", health: 14 });
  expect(characterStatus).toBe("critical");
});

test("compare arrays", () => {
  const sortArray = compare(charactersStatus);
  expect(sortArray).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
});
