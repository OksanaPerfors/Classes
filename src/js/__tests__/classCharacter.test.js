import { Character } from "../classCharacter.js";

test("check className", () => {
  const characterString = Character({ name: "М" });
  expect(characterString).toBe((Character.name = String));
});
