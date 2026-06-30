# Lezione 3 — Quanto mi conosci? ❤️

## Guida per l'insegnante

---

# Obiettivo della lezione

Nelle prime due lezioni la studentessa ha imparato che un programma può:

* reagire agli eventi;
* ricordare dei dati;
* prendere decisioni.

Oggi farà un altro passo fondamentale.

Imparerà che un programma può **ricordarsi dove si trova**.

Questo concetto si chiama **stato dell'applicazione (state)**.

Alla fine della lezione dovrà riuscire a spiegare una frase molto semplice:

> "Il programma sa quale domanda sta mostrando e quale dovrà mostrare dopo."

Non è importante che ricordi la parola *state*.

È importante che capisca l'idea.

---

# Prima di iniziare

Questa è la prima lezione in cui il programma evolve nel tempo.

Nella lezione precedente ogni click era indipendente.

Qui invece ogni click cambia il comportamento del successivo.

Questo è un concetto enorme.

Per questo motivo, vai lentamente.

---

# Cosa costruirete

Un piccolo quiz.

Ogni domanda ha quattro risposte.

Quando sceglie una risposta:

* viene mostrata la domanda successiva;
* il punteggio viene aggiornato;
* alla fine compare il risultato.

---

# Cosa imparerà

Nuovi concetti:

* oggetti
* array di oggetti
* stato dell'applicazione
* indice corrente
* aggiornare la pagina più volte
* riutilizzare la stessa funzione

Concetti già conosciuti:

* array
* variabili
* funzioni
* eventi
* `if`
* `let`

---

# La regola della giornata

Ripeti spesso questa frase.

> "Il programma deve ricordarsi dove è arrivato."

Questa è la chiave dell'intera lezione.

---

# Struttura della lezione

## Parte 1 — Costruiamo la pagina

Fatele creare:

* il titolo;
* il testo della domanda;
* quattro pulsanti;
* il punteggio;
* il numero della domanda.

Ancora una volta, tutto parte dall'interfaccia.

---

## Parte 2 — Le domande

Domanda.

> "Come possiamo salvare tutte le domande?"

Lascia che proponga una soluzione.

Probabilmente dirà:

> "In un array."

Perfetto.

Scrivete il primo array.

Poi chiedi:

> "Ma ogni domanda ha solo il testo?"

Probabilmente risponderà di no.

Serve anche:

* le risposte;
* quella corretta.

Qui nasce naturalmente l'oggetto.

```ts
{
    domanda: "...",
    risposte: [...],
    corretta: 2
}
```

Non dire:

> "Oggi impariamo gli oggetti."

Dì semplicemente:

> "Abbiamo bisogno di raggruppare alcune informazioni che appartengono alla stessa domanda."

---

# Parte 3 — Lo stato

Questa è la parte più importante.

Domanda.

> "Come fa il programma a sapere quale domanda mostrare?"

Aspetta.

Non suggerire nulla.

Quando sarà il momento introduci:

```ts
let domandaCorrente = 0;
```

Poi chiedi.

> "Secondo te perché questa volta usiamo `let` e non `const`?"

Lascia che ci ragioni.

---

# Parte 4 — Mostrare una domanda

Scrivete insieme una funzione.

```ts
mostraDomanda()
```

La funzione deve:

* leggere la domanda corrente;
* aggiornare il testo;
* aggiornare i pulsanti;
* aggiornare il contatore.

Questa funzione verrà richiamata più volte durante tutta la partita.

È un ottimo esempio di riuso del codice.

---

# Parte 5 — Rispondere

Quando viene premuto un pulsante.

Domanda.

> "Cosa deve succedere adesso?"

La risposta ideale è:

* controllare se è giusta;
* aggiornare il punteggio;
* passare alla domanda successiva.

Non importa se non lo dice nell'ordine corretto.

---

# Parte 6 — Passare alla domanda successiva

Questa è probabilmente la riga più importante della lezione.

```ts
domandaCorrente++;
```

Fermati.

Chiedi.

> "Che cosa rappresenta questa variabile?"

Se riesce a rispondere:

> "La domanda che stiamo mostrando."

Ha capito il concetto più importante della giornata.

---

# Parte 7 — La fine del quiz

Domanda.

> "Come fa il programma a capire che il quiz è finito?"

Lascia che osservi.

Avete:

* il numero della domanda corrente;
* il numero totale delle domande.

Il confronto nascerà quasi da solo.

```ts
if (domandaCorrente >= domande.length)
```

---

# Rompetelo apposta

Come sempre.

Questa volta crea errori diversi.

Per esempio:

* dimentica un `++`;
* usa l'indice sbagliato;
* prova ad accedere a una domanda che non esiste.

Chiedile:

> "Secondo te perché è comparso `undefined`?"

È un ottimo momento per parlare degli indici degli array.

---

# Sfide extra

## ⭐ Facile

Mostrare:

```
Domanda 3 di 5
```

---

## ⭐⭐ Media

Mescolare casualmente l'ordine delle risposte ogni volta che parte il quiz.

---

## ⭐⭐⭐ Difficile

Alla fine mostrare un messaggio diverso.

Per esempio.

```
5/5
Mi conosci meglio di chiunque altro ❤️
```

oppure

```
2/5
Direi che dobbiamo uscire più spesso 😂
```

---

# Cose da NON spiegare oggi

Evita ancora:

* classi
* `this`
* tipi complessi di TypeScript
* generics
* `map`
* `filter`
* `reduce`

Sono strumenti molto utili, ma non servono per capire lo stato dell'applicazione.

---

# Come capire se la lezione è riuscita

Alla fine chiedile:

> "Se chiudessi gli occhi...

come descriveresti il lavoro del programma?"

Una buona risposta potrebbe essere:

> "Tiene in memoria tutte le domande.

Sa quale sta mostrando.

Aspetta che io risponda.

Aggiorna il punteggio.

Passa alla domanda successiva.

Quando finiscono le domande mi mostra il risultato."

Se riesce a raccontare questo flusso con parole sue, allora ha davvero capito il concetto di stato.

---

# Per te

Questa sarà probabilmente la prima lezione in cui inizierà a vedere il programma come qualcosa di "vivo".

È normale che faccia più fatica rispetto alle lezioni precedenti.

Non avere paura dei momenti di silenzio.

Se dopo qualche minuto riesce a trovare da sola una soluzione, quella soddisfazione varrà molto più di qualsiasi spiegazione.

Ricorda sempre una cosa.

Non stai insegnando a scrivere codice.

Stai insegnando a ragionare su un problema e a dividerlo in piccoli passi.

Ed è proprio questo che rende una persona una programmatrice.
