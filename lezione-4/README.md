# Lezione 4 — La nostra Todo List 📝

## Guida per l'insegnante

---

# Obiettivo della lezione

Nelle lezioni precedenti la studentessa ha imparato che un programma può:

* reagire agli eventi;
* prendere decisioni;
* mantenere uno stato.

Oggi scoprirà un altro concetto fondamentale.

Una pagina web **non è un blocco unico**.

Può essere composta da tanti piccoli elementi indipendenti.

Ogni elemento ha una responsabilità precisa.

Alla fine della lezione dovrà riuscire a spiegare questa frase:

> "Ogni attività della lista è un piccolo pezzo dell'applicazione."

Non useremo ancora la parola **componente**.

È più importante capirne l'idea.

---

# Prima di iniziare

Questa è la prima lezione in cui inizierete a dividere il codice.

Fino ad oggi tutto viveva in `main.ts`.

Da oggi il file sta diventando abbastanza grande da meritare una migliore organizzazione.

Non presentarla come una regola.

Presentala come una conseguenza naturale.

---

# Cosa costruirete

Una Todo List.

L'utente potrà:

* aggiungere attività;
* contrassegnarle come completate;
* eliminarle.

Ogni attività sarà rappresentata da un oggetto e da un elemento della pagina.

---

# Cosa imparerà

Nuovi concetti:

* `createElement()`
* `append()`
* `for...of`
* creare elementi dinamicamente
* separare il codice in più file
* callback
* aggiornare una parte dell'interfaccia

Concetti già conosciuti:

* array
* oggetti
* funzioni
* eventi
* stato

---

# La regola della giornata

Ripeti spesso questa frase.

> "I dati vengono prima. L'interfaccia li rappresenta."

È il filo conduttore di tutta la lezione.

---

# Struttura della lezione

## Parte 1 — Costruiamo l'interfaccia

Come sempre.

Prima costruite:

* titolo;
* input;
* pulsante;
* lista.

Nessuna logica.

---

## Parte 2 — Dove vivono le attività?

Domanda.

> "Quando aggiungo una nuova attività...

dove la salvo?"

Lascia che ci pensi.

Arriverà naturalmente a:

```ts
let attività: Attività[] = [];
```

Qui introduce anche il primo modello dell'applicazione.

```ts
type Attività = {
    titolo: string;
    completata: boolean;
}
```

Spiega semplicemente:

> "Ogni attività deve avere sempre queste informazioni."

---

## Parte 3 — Perché non succede niente?

Aggiungete:

```ts
attività.push(...)
```

Poi fermati.

Domanda.

> "Perché la pagina non è cambiata?"

Questa è una delle scoperte più importanti del corso.

I dati non modificano automaticamente l'interfaccia.

Serve aggiornarla.

---

## Parte 4 — La funzione render()

Introduci:

```ts
render();
```

Spiegala così.

> "Ogni volta che cambiano i dati, ricostruiamo la lista."

Non parlare ancora di framework.

---

## Parte 5 — Creare un'attività

Qui nasce il nuovo file.

```
components/

    task-item.ts
```

Non dire:

> "Creiamo un componente."

Dì invece:

> "Spostiamo il codice che sa costruire una singola attività."

Questo è molto più concreto.

---

## Parte 6 — createElement()

Ogni attività viene costruita con:

* `<li>`
* checkbox
* testo
* pulsante elimina

Usate `createElement()` per tutti gli elementi.

Falle osservare una cosa.

Quando scrive:

```ts
const span = document.createElement("span");

span.
```

VS Code suggerisce tantissime proprietà.

Spiega che questo succede perché `span` è un vero oggetto.

---

## Parte 7 — CSS e responsabilità

Questa è una buona occasione per introdurre un principio importante.

Il TypeScript decide **cosa** succede.

Il CSS decide **come** appare.

Per questo motivo evita:

```ts
span.style.textDecoration = ...
```

Preferisci:

```ts
span.classList.toggle(
    "completed",
    attività.completata,
);
```

Così sarà il CSS a decidere l'aspetto di un'attività completata.

---

## Parte 8 — Le callback

Quando il pulsante elimina viene premuto.

Domanda.

> "Chi sa davvero come eliminare un'attività?"

La risposta è:

Non `task-item.ts`.

Lo sa `main.ts`.

Per questo motivo il componente riceve una funzione.

```ts
onDelete()
```

Non chiamarla callback.

Puoi semplicemente dire.

> "È una funzione che il componente può eseguire quando serve."

---

## Parte 9 — Aggiornare solo ciò che cambia

Qui arriva una distinzione molto importante.

Quando aggiungiamo o eliminiamo un'attività:

```ts
render();
```

Quando invece cambiamo solo la checkbox:

non serve ricreare tutta la lista.

Basta aggiornare quel singolo elemento.

Spiega che non sempre è necessario ridisegnare tutta la pagina.

---

# Rompetelo apposta

Come sempre.

Questa volta prova a:

* dimenticare `append()`;
* dimenticare `render()`;
* non aggiungere la classe `completed`;
* eliminare una chiamata a `updateUI()`.

Domanda.

> "Perché i dati sono giusti ma la pagina no?"

---

# Sfide extra

## ⭐ Facile

Svuotare automaticamente l'input.

---

## ⭐⭐ Media

Premere Invio per aggiungere un'attività.

---

## ⭐⭐⭐ Difficile

Mostrare in basso.

```
Attività completate: 3 / 7
```

Questa sfida è molto interessante perché costringe a ragionare sui dati, non sull'interfaccia.

---

# Cose da NON spiegare oggi

Evita ancora:

* framework
* React
* Vue
* Virtual DOM
* classi JavaScript
* delegazione degli eventi

Anche se il codice inizia ad assomigliare a quello di un framework moderno.

---

# Come capire se la lezione è riuscita

Alla fine chiedile.

> "Che cosa sa fare `main.ts`?"

E poi.

> "Che cosa sa fare `task-item.ts`?"

La risposta ideale è qualcosa del genere.

> "`main.ts` gestisce tutta la lista.

> `task-item.ts` sa costruire e aggiornare una sola attività."

Se riesce a fare questa distinzione, ha iniziato a capire uno dei principi più importanti dello sviluppo software:

> **Ogni pezzo di codice dovrebbe avere una sola responsabilità.**

---

# Per te

Questa è una delle lezioni più importanti dell'intero percorso.

Per la prima volta la studentessa vedrà che un programma non cresce semplicemente aggiungendo righe nello stesso file.

Cresce dividendolo in parti più piccole, ognuna semplice da capire.

Non è ancora il momento di parlare di componenti o architetture.

È il momento di costruire una buona intuizione.

Un giorno scoprirà React o Vue e penserà:

> "Ah... è la stessa idea che usavamo nella Todo List."

Ed è esattamente l'obiettivo di questa lezione.
