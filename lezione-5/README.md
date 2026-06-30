# Lezione 5 — Generatore di Palette 🎨

## Guida per l'insegnante

---

# Obiettivo della lezione

Nelle lezioni precedenti la studentessa ha imparato che un programma può:

* reagire agli eventi;
* prendere decisioni;
* mantenere uno stato;
* creare e aggiornare elementi della pagina;
* dividere il codice in più file.

Oggi scoprirà un nuovo principio fondamentale.

> **I programmatori cercano di non scrivere mai due volte lo stesso codice.**

Alla fine della lezione dovrà riuscire a spiegare questa frase:

> "Quando devo fare la stessa cosa tante volte, uso un ciclo."

L'obiettivo non è imparare la sintassi del `for`.

L'obiettivo è capire **quando serve**.

---

# Prima di iniziare

Questa è probabilmente la prima lezione in cui sentirà il bisogno di copiare e incollare codice.

Lascia che succeda.

È importante.

Non anticipare il ciclo.

Quando proverà a scrivere cinque volte lo stesso codice sarà lei stessa a percepire il problema.

Solo allora introduci `for`.

---

# Cosa costruirete

Un generatore di palette.

Ogni volta che viene premuto il pulsante:

* vengono creati cinque colori casuali;
* ogni colore viene mostrato in una card;
* ogni card mostra il colore e il suo codice HEX.

L'obiettivo finale sarà qualcosa di questo tipo.

```text
🎨 Palette Generator

[ Genera ]

🟥  #F94144

🟧  #F8961E

🟨  #F9C74F

🟩  #90BE6D

🟦  #577590
```

---

# Cosa imparerà

Nuovi concetti:

* `for`
* creare elementi ripetutamente
* funzioni riutilizzabili
* cartella `utils`
* separare la logica dall'interfaccia

Concetti già conosciuti:

* array
* componenti
* `createElement()`
* `render()`
* moduli
* CSS Modules (se li state già usando)

---

# La regola della giornata

Ripeti spesso questa frase.

> "Se copi lo stesso codice tante volte, probabilmente manca uno strumento."

---

# Struttura della lezione

## Parte 1 — Costruiamo la pagina

Come sempre.

Prima create:

* titolo;
* pulsante "Genera";
* contenitore delle palette.

Ancora nessuna logica.

---

## Parte 2 — Un solo colore

Prima di parlare di cicli.

Create una sola card.

Con:

* un riquadro colorato;
* il codice HEX.

Domanda.

> "Come possiamo rappresentare un colore?"

Lascia che proponga una soluzione.

Potrebbe bastare:

```ts
type Color = {
    hex: string;
}
```

Non serve aggiungere altro.

---

## Parte 3 — Un componente

Create:

```text
components/

    color-card/
```

Dentro.

```ts
createColorCard(color)
```

Falle notare.

È la stessa identica idea usata nella Todo List.

Prima costruivamo un'attività.

Ora costruiamo un colore.

Il pattern è lo stesso.

---

## Parte 4 — Generare un colore casuale

Qui nasce una nuova cartella.

```text
utils/
```

Domanda.

> "Questa funzione appartiene a un componente?"

No.

Serve a tutta l'applicazione.

Per questo motivo la mettiamo in `utils`.

Create.

```ts
randomColor()
```

Per ora basta che restituisca una stringa.

Non serve spiegare l'algoritmo.

---

## Parte 5 — Cinque colori

Adesso arriva il momento importante.

Chiedi.

> "Come possiamo crearne cinque?"

Lasciala lavorare.

Molto probabilmente scriverà qualcosa del genere.

```ts
colors.push(randomColor());
colors.push(randomColor());
colors.push(randomColor());
colors.push(randomColor());
colors.push(randomColor());
```

Perfetto.

Non correggerla.

Chiedi soltanto.

> "E se domani fossero cento?"

A questo punto il ciclo nasce naturalmente.

---

## Parte 6 — Il primo ciclo

Introduce.

```ts
for (...)
```

Non spiegare tutta la sintassi.

Concentrati solo sull'idea.

> "Ripeti queste istruzioni cinque volte."

Fate qualche esperimento.

* 3 colori
* 5 colori
* 10 colori

Osservate che cambia solo un numero.

---

## Parte 7 — Render

A questo punto avrete qualcosa del genere.

* genero i dati;
* li salvo in un array;
* richiamo `render()`.

Falle notare.

È lo stesso schema della Todo List.

Sta iniziando a diventare un'abitudine.

---

## Parte 8 — Piccolo refactoring

Domanda.

> "Secondo te questa funzione fa troppe cose?"

Se sì.

Dividetela.

Per esempio.

* genera i dati;
* aggiorna la pagina.

È un buon momento per rinforzare il concetto di responsabilità singola.

---

# Rompetelo apposta

Come sempre.

Provate a:

* dimenticare `render()`;
* dimenticare `append()`;
* usare un ciclo con un limite sbagliato;
* dimenticare di svuotare il contenitore.

Chiedi.

> "Perché adesso vediamo dieci colori?"

Lascia che ci ragioni.

---

# Sfide extra

## ⭐ Facile

Generare 8 colori invece di 5.

---

## ⭐⭐ Media

Aggiungere un pulsante.

```text
📋 Copia
```

Che copia il codice HEX negli appunti.

---

## ⭐⭐⭐ Difficile

Mostrare il colore anche come sfondo dell'intera card.

---

# Cose da NON spiegare oggi

Evita ancora:

* `Array.map()`
* `Array.fill()`
* `Array.from()`
* HSL
* RGB
* algoritmi complessi per i colori

Lo scopo della lezione non è capire i colori.

È capire il ciclo.

---

# Come capire se la lezione è riuscita

Alla fine chiedile.

> "Perché abbiamo usato un ciclo?"

La risposta ideale non è:

> "Per creare cinque colori."

Ma:

> "Per evitare di scrivere lo stesso codice cinque volte."

Se riesce a fare questa distinzione, ha colto il vero concetto della lezione.

---

# Per te

Questa è una lezione molto importante.

Per la prima volta la studentessa scoprirà che il computer è molto più bravo di noi nei lavori ripetitivi.

Non avere fretta di introdurre il ciclo.

Anzi.

Lascia che senta il fastidio di copiare lo stesso codice più volte.

Quando finalmente scriverete un `for`, non sembrerà una nuova regola della programmazione.

Sembrerà la soluzione a un problema reale.

Ed è proprio così che dovrebbe nascere ogni nuovo concetto.

Ricorda sempre la filosofia di questo corso.

Non introduciamo mai uno strumento perché "è il momento del programma".

Lo introduciamo soltanto quando la soluzione attuale inizia a fare fatica.

Se alla fine della lezione inizierà spontaneamente a dire:

> "Forse qui potremmo usare un ciclo..."

allora avrai raggiunto l'obiettivo più importante.
