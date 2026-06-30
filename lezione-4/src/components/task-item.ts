import styles from './task-item.module.css';

import type { Attività } from "../types/attività";

export default function createTaskItem(
    attività: Attività,
    suEliminazione: () => void,
): HTMLLIElement {

    const li = document.createElement("li");
    li.classList.add(styles["task-item"]);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add(styles["task-checkbox"])

    const title = document.createElement("span");
    title.classList.add(styles["task-title"]);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(styles["delete-button"]);
    deleteButton.textContent = "🗑️";

    checkbox.addEventListener("change", onCheckboxChange);
    deleteButton.addEventListener("click", suEliminazione);

    li.append(
        checkbox,
        title,
        deleteButton,
    );

    updateUI();

    return li;

    function onCheckboxChange() {
        attività.completata = checkbox.checked;
        updateUI();
    }

    function updateUI() {
        checkbox.checked = attività.completata;
        title.textContent = attività.titolo;
        title.classList.toggle(styles["completed"], attività.completata);
    }
}