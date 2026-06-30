import type { Attività } from "../types/attività";

export default function creaElementoAttività(
    attività: Attività,
    invertiStato: () => void
): HTMLLIElement {

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = attività.completata;

    const span = document.createElement("span");
    span.textContent = attività.titolo;

    aggiornaStile();

    checkbox.addEventListener("change", () => {
        attività.completata = checkbox.checked;
        aggiornaStile();
        invertiStato();
    });

    li.append(checkbox);
    li.append(span);

    return li;

    function aggiornaStile() {
        if (attività.completata) {
            span.style.textDecoration = "line-through";
            span.style.opacity = "0.5";
        } else {
            span.style.textDecoration = "none";
            span.style.opacity = "1";
        }
    }
}