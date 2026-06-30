import styles from "./color-card.module.css";

import type { Color } from "../types/color";

type Props = {
  color: Color;
  onToggleLock: () => void;
};

export default function createColorCard({
  color,
  onToggleLock,
}: Props): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add(styles.card);

  const preview = document.createElement("div");
  preview.classList.add(styles.preview);

  const code = document.createElement("p");

  const actions = document.createElement("div");
  actions.classList.add(styles.actions);

  const copyButton = document.createElement("button");

  const lockButton = document.createElement("button");

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(color.hex);

    copyButton.textContent = "✅";

    setTimeout(() => updateUI(), 1000);
  });

  lockButton.addEventListener("click", () => {
    color.locked = !color.locked;

    updateUI();

    onToggleLock();
  });

  actions.append(copyButton, lockButton);

  card.append(preview, code, actions);

  updateUI();

  return card;

  function updateUI() {
    preview.style.backgroundColor = color.hex;

    code.textContent = color.hex;

    copyButton.textContent = "📋";

    lockButton.textContent = color.locked ? "🔒" : "🔓";
  }
}
