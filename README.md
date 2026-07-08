# Campo-Minato-React

## Italiano

Variante a turni del Campo Minato, giocatore contro bot, realizzata in React senza build tool.

**Stack:** JavaScript · React (via Babel standalone, in-browser) · HTML · CSS

### Descrizione

Progetto personale che implementa una variante a turni del Campo Minato: sia il giocatore che il bot dispongono di una propria griglia 5×5 con 5 mine posizionate casualmente e nascoste. Il giocatore seleziona una cella sulla propria griglia; se contiene una mina la partita termina con una sconfitta, altrimenti la cella diventa "sicura" e, dopo una breve pausa, il bot seleziona automaticamente una cella casuale sulla propria griglia. Se il bot seleziona una mina la partita termina con una vittoria per il giocatore, se raggiunge 5 celle sicure la partita termina in pareggio.

### Come si esegue

Non è richiesta alcuna build: React, ReactDOM e Babel sono inclusi come script standalone in `react-libs/` e caricati direttamente da `index.html`, con compilazione JSX effettuata nel browser. È sufficiente aprire `index.html` in un browser, oppure servirlo con un semplice server statico:
```
python3 -m http.server
```

### Funzionalità principali

- Due griglie 5×5 indipendenti (una per il giocatore, una per il bot), ciascuna con 5 mine posizionate casualmente all'avvio della partita
- Meccanica a turni: il giocatore seleziona una cella sulla propria griglia, poi — dopo un ritardo di 3 secondi — il bot seleziona automaticamente una cella casuale sulla propria griglia
- Stato delle celle rappresentato tramite colore (giallo = non ancora selezionata, blu = sicura, rosso = mina)
- Fine partita gestita tramite alert del browser: sconfitta se il giocatore seleziona una mina, vittoria se il bot seleziona una mina, pareggio se il bot raggiunge 5 celle sicure
- Componenti React funzionali e a classe (`App`, `Griglia`, `Cella`) con gestione dello stato centralizzata in `App`

### Struttura del progetto

```
Campo-Minato-React/
├── index.html                     # Entry point: carica React/Babel e monta il componente App
├── react-components/
│   ├── App.js                     # Stato di gioco, generazione delle mine e logica dei turni
│   ├── Griglia.js                 # Rende la griglia 5×5 come matrice di Cella
│   └── Cella.js                   # Singola cella cliccabile della griglia
├── react-libs/                    # React, ReactDOM e Babel standalone (nessun bundler/npm)
└── style/index.css                # Stile dell'interfaccia
```

### Note

Progetto didattico/personale senza build tool: React e Babel sono caricati come script e la compilazione JSX avviene direttamente nel browser (sconsigliato in produzione per motivi di performance). In base al codice, l'unica condizione di vittoria esplicita per il giocatore è che il bot selezioni una mina: non è presente un controllo di vittoria per il caso in cui sia il giocatore a raggiungere per primo 5 celle sicure sulla propria griglia.

### Licenza

MIT

---

## English

A turn-based Minesweeper variant, player against a bot, built with React and no build tool.

**Stack:** JavaScript · React (via standalone Babel, in-browser) · HTML · CSS

### Description

Personal project implementing a turn-based Minesweeper variant: both the player and the bot have their own 5×5 grid with 5 randomly placed, hidden mines. The player selects a cell on their own grid; if it contains a mine the game ends in a loss, otherwise the cell becomes "safe" and, after a short delay, the bot automatically selects a random cell on its own grid. If the bot selects a mine the player wins; if the bot reaches 5 safe cells the game ends in a draw.

### How to run

No build step required: React, ReactDOM and Babel are included as standalone scripts in `react-libs/` and loaded directly by `index.html`, with JSX compiled in the browser. Simply open `index.html` in a browser, or serve it with a simple static server:
```
python3 -m http.server
```

### Key features

- Two independent 5×5 grids (one for the player, one for the bot), each with 5 randomly placed mines at the start of the match
- Turn-based mechanic: the player selects a cell on their own grid, then — after a 3-second delay — the bot automatically selects a random cell on its own grid
- Cell state represented by color (yellow = not yet selected, blue = safe, red = mine)
- Game end handled via browser alerts: loss if the player selects a mine, win if the bot selects a mine, draw if the bot reaches 5 safe cells
- Functional and class React components (`App`, `Griglia`, `Cella`) with state centrally managed in `App`

### Project structure

```
Campo-Minato-React/
├── index.html                     # Entry point: loads React/Babel and mounts the App component
├── react-components/
│   ├── App.js                     # Game state, mine generation and turn logic
│   ├── Griglia.js                 # Renders the 5×5 grid as a matrix of Cella
│   └── Cella.js                   # Single clickable grid cell
├── react-libs/                    # Standalone React, ReactDOM and Babel (no bundler/npm)
└── style/index.css                # Interface styling
```

### Notes

Educational/personal project with no build tool: React and Babel are loaded as scripts and JSX is compiled directly in the browser (not recommended for production for performance reasons). Based on the code, the only explicit win condition for the player is the bot selecting a mine: there is no win check for the case where the player is the first to reach 5 safe cells on their own grid.

### License

MIT
