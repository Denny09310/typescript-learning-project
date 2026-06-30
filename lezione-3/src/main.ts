import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <div class="card">
    <h1>❤️ Quanto mi conosci?</h1>

    <p id="contatore"></p>

    <h2 id="domanda"></h2>

    <div class="risposte">
      <button id="risposta-0"></button>
      <button id="risposta-1"></button>
      <button id="risposta-2"></button>
      <button id="risposta-3"></button>
    </div>

    <p id="punteggio"></p>
  </div>
`

type Domanda = {
  domanda: string,
  risposte: string[],
  corretta: number
}

const domande: Domanda[] = [
  {
    domanda: "Qual è il mio colore preferito?",
    risposte: ["Blu", "Rosso", "Verde", "Nero"],
    corretta: 0,
  },
  {
    domanda: "Qual è il mio animale preferito?",
    risposte: ["Cane", "Gatto", "Panda", "Volpe"],
    corretta: 1,
  },
  {
    domanda: "Pizza preferita?",
    risposte: [
      "Margherita",
      "Diavola",
      "Prosciutto e funghi",
      "Quattro formaggi",
    ],
    corretta: 2,
  },
  {
    domanda: "Bevanda preferita?",
    risposte: ["Acqua", "Caffè", "Tè", "Coca-Cola"],
    corretta: 1,
  },
  {
    domanda: "Stagione preferita?",
    risposte: ["Estate", "Primavera", "Autunno", "Inverno"],
    corretta: 3,
  },
]


const domandaEl = document.querySelector<HTMLHeadingElement>("#domanda")!;
const contatoreEl = document.querySelector<HTMLParagraphElement>("#contatore")!;
const punteggioEl = document.querySelector<HTMLParagraphElement>("#punteggio")!;

const buttonsEl = [
  document.querySelector<HTMLButtonElement>("#risposta-0")!,
  document.querySelector<HTMLButtonElement>("#risposta-1")!,
  document.querySelector<HTMLButtonElement>("#risposta-2")!,
  document.querySelector<HTMLButtonElement>("#risposta-3")!,
];

let domandaVisibile = 0;
let punteggio = 0;

buttonsEl.forEach((buttonEl, indice) => {
  buttonEl.addEventListener('click', () => selezionaRisposta(indice))
})

mostraDomanda();

function mostraDomanda() {
  const domandaAttuale = domande[domandaVisibile];

  contatoreEl.textContent = `Domanda ${domandaVisibile + 1} di ${domande.length}`;
  punteggioEl.textContent = `Punteggio: ${punteggio}`;

  domandaEl.textContent = domandaAttuale.domanda;

  buttonsEl.forEach((buttonEl, indice) => {
    buttonEl.textContent = domandaAttuale.risposte[indice];
  })
}

function selezionaRisposta(selezionata: number) {
  const domandaAttuale = domande[domandaVisibile];

  if (selezionata === domandaAttuale.corretta) {
    punteggio++;
  }

  domandaVisibile++;

  if (domandaVisibile >= domande.length) {
    mostraPunteggio();
  } else {
    mostraDomanda();
  }
}

function mostraPunteggio() {
  domandaEl.textContent = `Hai totalizzato ${punteggio} punti su ${domande.length}!`;

  contatoreEl.textContent = "";
  punteggioEl.textContent = "";

  buttonsEl.forEach(buttonEl => {
    buttonEl.style.display = "none";
  });
}