import "./style.css";

import createColorCard from "./components/color-card";
import type { Color } from "./types/color";
import { randomColor } from "./utils/random";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
<div class="card">

    <h1>🎨 Palette Generator</h1>

    <button id="generate">
        Genera
    </button>

    <div id="palette"></div>

</div>
`;

const generateButton = document.querySelector<HTMLButtonElement>("#generate")!;
const palette = document.querySelector<HTMLDivElement>("#palette")!;

let colors: Color[] = [];

generateButton.addEventListener("click", generatePalette);

generatePalette();

function generatePalette() {
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].locked) {
      continue;
    }

    colors[i] = randomColor();
  }

  while (colors.length < 5) {
    colors.push(randomColor());
  }

  render();
}

function render() {
  palette.innerHTML = "";

  for (const color of colors) {
    palette.append(
      createColorCard({
        color,
        onToggleLock: render,
      }),
    );
  }
}
