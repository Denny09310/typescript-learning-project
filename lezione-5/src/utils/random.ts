import type { Color } from "../types/color";

export function randomColor(): Color {
  const letters = "0123456789ABCDEF";

  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * letters.length)];
  }

  return {
    hex,
    locked: false,
  };
}
