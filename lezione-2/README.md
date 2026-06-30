# Lezione 2 — Indovina il numero 🎲

## Guida per l'insegnante

---

# Obiettivo della lezione

Nella lezione precedente la studentessa ha imparato che un programma può:

* ricordare delle informazioni;
* reagire a un click;
* modificare una pagina.

Oggi farà un passo fondamentale.

Capirà che un programma può **prendere decisioni**.

Alla fine della lezione dovrà riuscire a spiegare una frase molto semplice:

> "Il computer controlla una condizione e decide cosa fare."

Questo è il vero obiettivo.

Non gli `if`.

---

# Prima di iniziare

Questa è probabilmente la prima lezione in cui la studentessa dovrà ragionare davvero.

Per questo motivo:

* fai ancora più domande;
* lascia più silenzi;
* resisti alla tentazione di suggerire la soluzione.

Quando resta in silenzio non significa necessariamente che sia bloccata.

Spesso significa che sta pensando.

---

# Cosa costruirete

Un piccolo gioco.

Il computer sceglie un numero segreto.

L'utente prova a indovinarlo.

Il programma risponde:

* 📉 Troppo basso
* 📈 Troppo alto
* 🎉 Hai indovinato!

Alla fine aggiungerete anche il numero di tentativi.

---

# Cosa imparerà

Nuovi concetti:

* `input`
* leggere il valore scritto dall'utente
* `let`
* `if`
* `else if`
* `else`
* confronti (`<`, `>`, `===`)
* aggiornare una variabile

Vecchi concetti che verranno rinforzati:

* eventi
* funzioni
* DOM
* variabili
* CSS

---

# La regola della giornata

Oggi il computer non fa più sempre la stessa cosa.

**Decide.**

Ripeti spesso questa frase.

---

# Struttura della lezione

## Parte 1 — Costruiamo l'interfaccia

Fatele creare:

* un titolo;
* un input numerico;
* un bottone;
* un paragrafo per il messaggio.

Non scrivere tu il codice.

---

## Parte 2 — Il numero segreto

Domanda.

> "Secondo te dove possiamo salvare il numero che bisogna indovinare?"

Aspetta.

Lasciala rispondere.

Solo dopo introduci:

```ts
const numeroSegreto = ...
```

---

## Parte 3 — Leggere quello che scrive l'utente

Domanda.

> "Noi vediamo il numero scritto nella casella.

Come fa a vederlo anche il programma?"

Lascia che provi.

Poi introduci:

```ts
input.value
```

Fatele fare un esperimento.

```ts
console.log(input.value)
```

Ogni volta che preme il bottone.

---

# Un errore molto comune

A questo punto quasi sicuramente confronterà:

```ts
input.value === numeroSegreto
```

Lascia che succeda.

Quando non funziona chiedi:

> "Che tipo di dato restituisce un input?"

Poi falle osservare.

```ts
console.log(typeof input.value)
```

Scoprirà da sola che è una stringa.

Solo allora introduci:

```ts
Number(input.value)
```

Questo momento vale tantissimo.

---

# Parte 4 — Il primo if

Prima domanda.

> "Come diresti in italiano:

'Se il numero è giusto...'"

Lei probabilmente dirà proprio:

> "Se è uguale..."

Perfetto.

Solo adesso scrivete.

```ts
if (...) {

}
```

Non spiegare tutta la sintassi.

Completatela insieme.

---

# Parte 5 — Troppo alto o troppo basso

Domanda.

> "E se fosse sbagliato?"

Lascia che sia lei a proporre:

* troppo alto
* troppo basso

Solo dopo introduci:

```ts
else if
```

e

```ts
else
```

---

# Parte 6 — Contare i tentativi

Domanda.

> "Come facciamo a ricordarci quanti tentativi sono stati fatti?"

Lei dovrebbe arrivare naturalmente a dire:

"Una variabile."

Perfetto.

Questa volta usa:

```ts
let tentativi = 0;
```

Prima domanda.

> "Perché questa volta non possiamo usare `const`?"

Se non lo ricorda va benissimo.

Fatele ragionare.

---

# Parte 7 — Aggiornare la pagina

Ogni tentativo deve aggiornare anche:

> Tentativi: 4

Qui riutilizza concetti della prima lezione.

È importante.

---

# Rompetelo apposta

Come nella lezione precedente.

Questa volta crea errori diversi.

Per esempio:

* dimentica un `{`
* dimentica un `}`
* usa `=` invece di `===`

Leggete insieme gli errori.

---

# Sfide extra

## ⭐ Facile

Quando indovina:

Disabilitare il bottone.

---

## ⭐⭐ Media

Mostrare anche tutti i tentativi fatti.

Esempio.

```
Hai provato:

12

8

10

15
```

---

## ⭐⭐⭐ Difficile

Aggiungere un pulsante:

```
Nuova partita
```

Che genera un nuovo numero casuale.

---

# Cose da NON spiegare oggi

Evita ancora:

* coercizione dei tipi
* `parseInt` vs `Number`
* `NaN`
* truthy/falsy
* operatori logici (`&&`, `||`)

Non servono.

---

# Come capire se la lezione è riuscita

Alla fine chiedile:

> "Se il computer dovesse spiegare come funziona questo gioco...

cosa direbbe?"

La risposta ideale sarà qualcosa del genere.

> "Aspetto che l'utente scriva un numero.

Lo confronto con il mio.

Se è uguale ha vinto.

Se è più grande glielo dico.

Se è più piccolo glielo dico."

Se riesce a raccontarlo con parole sue, ha capito il concetto più importante della giornata.

---

# Per te

Durante questa lezione succederà una cosa nuova.

Per la prima volta potrebbe bloccarsi davanti a un problema.

Non viverlo come un momento negativo.

Anzi.

Se dopo qualche minuto riesce a trovare la soluzione quasi da sola, probabilmente sarà il momento che ricorderà meglio dell'intero corso.

L'apprendimento più duraturo non nasce dalle spiegazioni perfette.

Nasce dalle piccole scoperte.
