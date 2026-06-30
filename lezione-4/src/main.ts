import creaElementoAttività from './components/task-item';
import './style.css'
import type { Attività } from './types/attività';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
    <div class="card">
        <h1>📝 La nostra Todo List</h1>

        <div class="input-row">
        <input
            id="task-input"
            type="text"
            placeholder="Nuova attività..."
        />

        <button id="add-button">
            Aggiungi
        </button>
        </div>

        <ul id="task-list"></ul>
    </div>
`;

const inputEl = document.querySelector<HTMLInputElement>("#task-input")!;
const aggiungiEl = document.querySelector<HTMLButtonElement>("#add-button")!;
const listaEl = document.querySelector<HTMLUListElement>("#task-list")!;

let elementi: Attività[] = [];

aggiungiEl.addEventListener('click', aggiungiElemento);

render();

function aggiungiElemento() {
    const titolo = inputEl.value;

    if (titolo === "") {
        return;
    }

    elementi.push({ titolo, completata: false });

    inputEl.value = "";
    render();
}

function render() {
    listaEl.innerHTML = "";

    for (const attività of elementi) {
        const li = creaElementoAttività(attività, render);
        listaEl.append(li);
    }
}