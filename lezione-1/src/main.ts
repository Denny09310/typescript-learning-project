import "./style.css";

document.querySelector("#app")!.innerHTML = /* html */ `
  <div class="card">
    <h1>💌 Generatore di complimenti</h1>
    <p id="complimento">Premi il bottone per scoprire cosa penso di te</p>
    <button id="bottone">Dimmi qualcosa di carino</button>
  </div>
`;

const complimenti = [
  "Hai un sorriso che batte qualsiasi sole.",
  "Sei la persona più divertente che conosca.",
  "Riesci a rendere bella anche una giornata storta.",
  "Sei più intelligente di quanto tu creda.",
  "Con te il tempo vola sempre troppo in fretta.",
];

const complimentoEl = document.querySelector("#complimento")!;
const bottoneEl = document.querySelector<HTMLButtonElement>("#bottone")!;

bottoneEl.addEventListener('click', () => {
  const indice = Math.floor(Math.random() * complimenti.length);
  complimentoEl.textContent = complimenti[indice];
});