import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div class="card">
    <h1>🎯 Indovina il numero</h1>

    <p>
      Ho scelto un numero tra <strong>1</strong> e <strong>100</strong>.
    </p>

    <input
      id="numero"
      type="number"
      placeholder="Scrivi un numero"
      min="1"
      max="100"
    />

    <button id="bottone">
      Prova!
    </button>

    <p id="messaggio">
      Buona fortuna! 🍀
    </p>

    <p id="tentativi">
      Tentativi: 0
    </p>
  </div>
`

const inputEl = document.querySelector<HTMLInputElement>("#numero")!;
const bottoneEl = document.querySelector<HTMLButtonElement>("#bottone")!;
const messaggioEl = document.querySelector<HTMLParagraphElement>("#messaggio")!;
const tentativiEl = document.querySelector<HTMLParagraphElement>("#tentativi")!;

const numeroSegreto = Math.floor(Math.random() * 100) + 1;

let tentativi = 0;

bottoneEl.addEventListener('click', controllaNumero);

function controllaNumero() {
  const numeroInserito = Number(inputEl.value);

  tentativi++;
  tentativiEl.textContent = `Tentativi: ${tentativi}`;

  if (numeroInserito === numeroSegreto) {
    messaggioEl.textContent = "🎉 Hai indovinato!";
    bottoneEl.disabled = true;
  } else if (numeroInserito < numeroSegreto) {
    messaggioEl.textContent = "📉 Troppo basso!";
  } else {
    messaggioEl.textContent = "📈 Troppo alto!";
  }
}