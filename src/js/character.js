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
