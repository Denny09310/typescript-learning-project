# Lezione 4 — La nostra Todo List 📝

## Guida per l'insegnante

---

# Obiettivo della lezione

Nelle lezioni precedenti la studentessa ha imparato che un programma può:

* reagire a un evento;
* prendere decisioni;
* ricordarsi uno stato.

Oggi scoprirà qualcosa di nuovo.

Una pagina web **non deve essere completamente scritta all'inizio**.

Può essere costruita e modificata dal programma mentre è in esecuzione.

Alla fine della lezione dovrà riuscire a spiegare questa frase:

> "L'interfaccia dipende dai dati."

È probabilmente uno dei concetti più importanti dell'intero percorso.

---

# Prima di iniziare

Questa è la prima lezione in cui l'HTML non è più fisso.

Fino ad oggi il programma cambiava solo il testo di elementi già esistenti.

Da oggi inizierà a creare elementi nuovi.

Questo è un grande passo.

Vai lentamente.

---

# Cosa costruirete

Una piccola Todo List.

L'utente potrà:

* scrivere un'attività;
* premere "Aggiungi";
* vedere comparire una nuova riga nella lista.

Per semplicità, oggi **non eliminerete ancora le attività**.

L'obiettivo è imparare a crearle.

---

# Cosa imparerà

Nuovi concetti:

* `createElement()`
* `append()`
* `for...of`
* creare elementi dinamicamente
* funzione `render()`

Concetti già conosciuti:

* array
* funzioni
* eventi
* variabili
* input
* stato

---

# La regola della giornata

Ripeti spesso questa frase.

> "I dati vengono prima. La pagina li rappresenta."

È il concetto chiave.

---

# Struttura della lezione

## Parte 1 — Costruiamo la pagina

Fatele creare:

* titolo;
* input;
* pulsante;
* lista vuota (`<ul>`).

Ancora una volta, partite sempre dall'interfaccia.

---

# Parte 2 — Dove salviamo le attività?

Domanda.

> "Quando aggiungiamo una nuova attività... dove la teniamo?"

Lascia che ci pensi.

Dovrebbe arrivare naturalmente a:

```ts
let tasks: string[] = [];
```

Ricorda.

Non stiamo ancora mostrando nulla.

Stiamo solo salvando dati.

---

# Parte 3 — Aggiungere una nuova attività

Domanda.

> "Come facciamo ad aggiungere un nuovo elemento alla lista?"

Aspetta.

Se non lo ricorda, introduci:

```ts
tasks.push(...)
```

Fatele osservare che l'array cambia.

La pagina invece no.

---

# Parte 4 — Perché non succede niente?

Questo è un momento fondamentale.

Dopo aver fatto:

```ts
tasks.push(...)
```

Chiedi.

> "Perché non è comparso nulla?"

Non rispondere subito.

L'obiettivo è farle capire che:

> modificare i dati

non significa

> modificare automaticamente la pagina.

Questa scoperta vale moltissimo.

---

# Parte 5 — La funzione render()

Introduci una funzione.

```ts
render();
```

Spiegala così.

> "Ogni volta che cambiano i dati, ridisegniamo la lista."

Non parlare ancora di framework o React.

Basta questa idea.

---

# Parte 6 — Creare un elemento

Qui arriva il vero concetto nuovo.

Domanda.

> "Se la lista contiene tre attività...

come facciamo a creare tre `<li>`?"

Introduce:

```ts
document.createElement("li")
```

Falle osservare una cosa.

Quando scrive:

```ts
li.
```

VS Code suggerisce tantissime proprietà.

Spiegale che questo succede perché `li` è un vero oggetto, non una stringa.

È uno dei motivi per cui oggi usiamo `createElement()`.

---

# Parte 7 — Riempire l'elemento

Aggiungete:

```ts
li.textContent = ...
```

Poi.

```ts
lista.append(li)
```

Salvate.

Osservate.

È uno dei momenti più belli della lezione.

Il programma ha appena creato un pezzo di pagina.

---

# Parte 8 — Il ciclo

Domanda.

> "Se le attività fossero dieci?"

Lascia che proponga qualche idea.

Poi introduci.

```ts
for (const task of tasks)
```

Non presentarlo come "oggi impariamo i cicli".

Presentalo come la soluzione a un problema reale.

---

# Parte 9 — Svuotare la lista

Prima di ricrearla.

Domanda.

> "Se richiamo render due volte... cosa succede?"

Lascia che lo scopra.

Compariranno i duplicati.

Perfetto.

Ora introduci:

```ts
lista.innerHTML = "";
```

Spiega.

> "Prima cancelliamo tutto.

Poi ricostruiamo la lista."

---

# Rompetelo apposta

Come sempre.

Questa volta prova a:

* dimenticare `append()`;
* dimenticare `render()`;
* creare il `li` ma non aggiungerlo.

Domanda.

> "Il programma ha creato l'elemento.

Perché non lo vediamo?"

È un ottimo momento per distinguere tra memoria e pagina.

---

# Sfide extra

## ⭐ Facile

Dopo aver aggiunto un'attività:

svuotare automaticamente l'input.

---

## ⭐⭐ Media

Se l'input è vuoto:

non aggiungere nulla.

---

## ⭐⭐⭐ Difficile

Premendo Invio invece del pulsante.

---

# Cose da NON spiegare oggi

Evita ancora:

* `querySelectorAll`
* `dataset`
* `classList`
* `remove()`
* delegazione degli eventi
* callback complesse

Ci serviranno presto.

Ma oggi no.

---

# Come capire se la lezione è riuscita

Alla fine chiedile:

> "Se aggiungo una nuova attività...

quali sono tutti i passaggi che fa il programma?"

Una buona risposta potrebbe essere:

> "Legge il testo.

Lo aggiunge all'array.

Cancella la lista.

Ricrea tutti gli elementi.

Li aggiunge alla pagina."

Se riesce a raccontare questa sequenza, ha capito il cuore della lezione.

---

# Per te

Questa è la prima lezione in cui la studentessa inizierà a vedere la pagina web come qualcosa che il programma costruisce.

È un cambio di prospettiva enorme.

Non avere fretta di arrivare al risultato finale.

Fermati spesso.

Ogni volta che compare un nuovo elemento chiedile:

> "Chi lo ha creato?"

La risposta corretta non è:

> "Noi."

È:

> "Il programma."

Quando inizierà a ragionare in questo modo, sarà pronta per affrontare progetti molto più complessi.
