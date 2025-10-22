<p align="center">
    <img src="https://github.com/Pgalli992/Co2_tracker_react_s2i/blob/main/src/assets/molecola.png" align="center">
</p>
<p align="center"><h1 align="center">CO2_TRACKER_REACT_S2I</h1></p>
<br>


## Descrizione:

Co2-tracker ti permette di monitorare facilmente le emissioni di CO₂, offrendo una panoramica chiara e aggiornata dell’impatto ambientale legato alle attività energetiche dei diversi paesi.

Visualizza dati storici e attuali, rappresentati in grammi di CO₂ equivalente per kWh, con aggiornamenti in tempo reale dalla API di Nowtricity.

Grazie alla funzione cached, l’app memorizza i dati delle interazioni precedenti per ridurre al minimo le chiamate al servizio esterno, migliorando l’efficienza e riducendo il consumo di risorse computazionali e di rete.

Questa ottimizzazione contribuisce indirettamente a ridurre l’impronta ecologica digitale collegata all’elaborazione dati, promuovendo un uso più sostenibile della tecnologia.

Provalo qui: [Co2 - Tracker](https://pg-co2tracker.pg-dev.space/)

## Servizi esterni:
Questo progetto utilizza:
- l'API di [Nowtricity](https://www.nowtricity.com/emissions-api/), un servizio che aggrega dati da fonti ufficiali di produzione energetica.
- l'API di [REST Countries](https://restcountries.com/), da cui vengono recuperati: bandiera, popolazione e area del paese.

## 🚀 Come iniziare

### ☑️ Prerequisiti

Prima di iniziare con Co2_tracker_react_s2i.git, assicurati che il tuo ambiente di runtime soddisfi i seguenti requisiti:

- **Linguaggio di programmazione:** JavaScript  
- **Gestore pacchetti:** Npm

### ⚙️ Installazione

Installa Co2_tracker_react_s2i.git utilizzando uno dei seguenti metodi:

**Compilazione dal sorgente:**

1. Clona il repository Co2_tracker_react_s2i.git:
```sh
 git clone https://github.com/Pgalli992/Co2_tracker_react_s2i.git
```
2. Spostati nella directory del progetto:
```sh
 cd Co2_tracker_react_s2i.git
```

3. Installa le dipendenze del progetto:

**Usando [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)
```sh
 npm install
```

### 🤖 Utilizzo

Esegui Co2_tracker_react_s2i.git usando il seguente comando:  
**Usando [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)
```sh
 npm start
```
### Comandi utili


Creare la cartella dist in dev mode

```sh
npm run build:dev
```

Creare la cartella dist in production mode

```sh
npm run build
```

Far girare il progetto dalla cartella dist in locale e network (su qualsisi dispositivo connesso alla tua rete; comodo per eplorare viewport diverse).

```sh
npm run dev
```


