# Prima lezione di programmazione 💻💕

## Guida per l'insegnante (versione dettagliata)

> **Obiettivo della lezione**
>
> Alla fine della lezione non voglio che sappia cos'è TypeScript. Voglio
> che pensi:
>
> **"Ho scritto un piccolo programma e capisco, a grandi linee, perché
> funziona."**

------------------------------------------------------------------------

# Prima di iniziare: la filosofia della lezione

Questa è probabilmente la parte più importante.

Se è la sua prima esperienza, non sta imparando la sintassi: sta
imparando **come ci si sente a programmare**.

Per questo motivo:

-   falle scrivere tutto;
-   non avere paura del silenzio;
-   fai moltissime domande;
-   spiega solo ciò che serve in quel momento.

Ogni volta che stai per spiegare qualcosa, chiediti:

> "Le servirà entro i prossimi cinque minuti?"

Se la risposta è no, rimanda.

------------------------------------------------------------------------

# Le quattro regole d'oro

## 1. Lei usa la tastiera

Anche se è lenta.

Anche se sbaglia.

La memoria muscolare conta moltissimo.

------------------------------------------------------------------------

## 2. Non correggere subito

Se compare un errore:

Non dire:

> Hai dimenticato una parentesi.

Chiedi invece:

> "Secondo te cosa sta cercando di dirci?"

L'obiettivo non è eliminare gli errori.

È imparare a leggerli.

------------------------------------------------------------------------

## 3. Fai fare previsioni

Prima di eseguire QUALSIASI pezzo di codice chiedi:

> "Secondo te cosa succederà?"

È una delle tecniche didattiche più efficaci.

------------------------------------------------------------------------

## 4. Festeggia i piccoli progressi

Ogni volta che compare qualcosa nel browser fermati un momento.

"Questa l'hai fatta tu."

Sembra banale, ma aumenta molto la motivazione.

------------------------------------------------------------------------

# Parte 0 --- Una domanda

Prima di aprire VS Code.

Chiedi:

> "Quando premi un pulsante su un sito... secondo te cosa succede?"

Non importa la risposta.

Ti serve soltanto per introdurre l'idea che guiderà tutta la lezione.

    Esiste una pagina

    ↓

    L'utente fa qualcosa

    ↓

    Il programma reagisce

Ogni concetto della giornata ricadrà in uno di questi tre punti.

------------------------------------------------------------------------

# Parte 1 --- Setup

Falle digitare tutti i comandi.

Non prendere mai la tastiera.

Spiegazioni minime:

-   Node esegue strumenti JavaScript sul computer.
-   npm scarica librerie.
-   Vite rende più semplice sviluppare.

Evita dettagli su transpiler, bundler o moduli.

Non servono ancora.

------------------------------------------------------------------------

# Parte 2 --- HTML, CSS e TypeScript

Mostrale solo questa tabella.

  Linguaggio   Ruolo
  ------------ ----------------------
  HTML         crea gli elementi
  CSS          decide come appaiono
  TypeScript   decide cosa succede

Non usare ancora termini come DOM.

Li introdurrai quando serviranno.

------------------------------------------------------------------------

# Parte 3 --- Il ciclo di sviluppo

Disegnalo.

    VS Code

    ↓

    Salvo

    ↓

    Vite aggiorna

    ↓

    Browser esegue

    ↓

    Vedo il risultato

Molti principianti pensano che VS Code "mostri" il programma.

Questa distinzione è importante.

------------------------------------------------------------------------

# Parte 4 --- Costruire la pagina

Quando incollate il primo blocco HTML:

FERMATI.

Non continuare.

Falle cambiare:

-   il titolo;
-   l'emoji;
-   il testo del pulsante.

Salvate ogni modifica.

Obiettivo psicologico:

"Sto controllando quello che vedo."

Non spiegare ancora: - template literal; - generici; - non-null
assertion.

Puoi semplicemente dire:

"Ci sono alcuni simboli che aiutano TypeScript. Oggi li ignoriamo."

------------------------------------------------------------------------

# Parte 5 --- CSS

Non incollare tutto.

Fai piccoli esperimenti.

Per esempio:

1.  cambia il colore dello sfondo;
2.  centra il contenuto;
3.  aumenta il bordo arrotondato.

Dopo ogni modifica chiedi:

> "Quale riga pensi abbia prodotto questo cambiamento?"

Così il CSS diventa causa-effetto.

------------------------------------------------------------------------

# Parte 6 --- Array

Prima domanda:

> "Se il computer deve ricordarsi cinque frasi... dove le tiene?"

Aspetta.

Poi introduci l'array.

Personalizzate insieme almeno due complimenti.

È uno dei momenti più divertenti della lezione.

------------------------------------------------------------------------

# Parte 7 --- Funzioni

Prima domanda:

> "Se domani volessi rifare questa operazione dieci volte?"

Introduci la funzione come:

"Un insieme di istruzioni a cui possiamo dare un nome."

Non parlare ancora di void.

------------------------------------------------------------------------

# Parte 8 --- Numeri casuali

Invece della spiegazione teorica:

Scrivete:

``` ts
console.log(Math.random())
```

Osservate.

Poi:

``` ts
console.log(complimenti.length)
```

Poi:

``` ts
console.log(Math.random() * complimenti.length)
```

Infine:

``` ts
console.log(Math.floor(Math.random() * complimenti.length))
```

Lascia che scopra il comportamento osservando.

------------------------------------------------------------------------

# Parte 9 --- Eventi

Ricorda la domanda iniziale.

"L'utente fa qualcosa."

Ora puoi dire:

"Il browser può avvisarci quando succede qualcosa."

Introduci addEventListener.

Poi fate un esperimento.

Aggiungete per errore le parentesi.

Osservate cosa cambia.

------------------------------------------------------------------------

# Parte 10 --- Rompere il programma

Questa parte è obbligatoria.

Create volontariamente:

-   un errore di battitura;
-   una parentesi mancante;
-   una virgola mancante.

Leggete insieme il messaggio.

L'obiettivo è eliminare la paura degli errori.

------------------------------------------------------------------------

# Parte 11 --- Missione libera

Per cinque minuti tu non tocchi la tastiera.

Missioni:

-   aggiungi due complimenti;
-   cambia il colore;
-   cambia il testo del bottone;
-   cambia l'emoji;
-   rendi il pulsante enorme.

Se ti chiede aiuto, rispondi con domande prima che con soluzioni.

------------------------------------------------------------------------

# Cose da NON spiegare oggi

Rimanda serenamente:

-   `<HTMLDivElement>`{=html}
-   string\[\]
-   void
-   !
-   /\* html \*/

Non sono concetti importanti per capire come ragiona un programma.

------------------------------------------------------------------------

# Come capire se la lezione è andata bene

Alla fine NON chiederle:

"Hai capito?"

Chiedile invece:

1.  Cosa succede quando premi il pulsante?
2.  Dove sono salvati i complimenti?
3.  Chi decide quale frase mostrare?
4.  Come fa il programma a sapere che hai cliccato?

Se riesce a rispondere con parole sue, la lezione è stata un successo.

------------------------------------------------------------------------

# Per te

Ricorda sempre una cosa.

Un buon insegnante non è quello che spiega meglio.

È quello che crea le condizioni perché l'altra persona faccia
continuamente piccole scoperte.

Se durante la lezione parli meno di quanto avevi programmato,
probabilmente sta andando molto bene.
