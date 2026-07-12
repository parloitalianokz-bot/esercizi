/**
 * DATI LEZIONE - CONFIGURAZIONE
 * Questo è il file unico da usare per l'Unità 1.
 */

export const ConfigLezione = {
    // 1. ID UNIVOCO PER FIREBASE
    idFirebase: "unita_01_albergo_centro",

    // 2. INTESTAZIONE
    titolo: "Unità 1 - Un albergo in centro",
    sottotitolo: "Livello A1 - Iniziamo a viaggiare",
    bannerImg: "img/ponte_vecchio_firenze.jpg", 

    // 3. SCHEDA 1: ELICITAZIONE E GIOCO LESSICALE
    elicitazione: {
        titolo: "✨ Conosci l'Italia?", // <--- Aggiungi questa riga qui!
        intro: "Osserva la mappa dell'Italia. Sei mai stato in Italia? Quali città conosci? Scrivi sulla lavagna le parole italiane che già conosci.",
        gioco: [
            { parola: "L'albergo", audio: "audio/albergo.mp3", imgC: "img/albergo.jpg", imgS: "img/scuola.jpg" },
            { parola: "Firenze", audio: "audio/firenze.mp3", imgC: "img/firenze.jpg", imgS: "img/roma.jpg" },
            { parola: "Il centro", audio: "audio/centro.mp3", imgC: "img/centro.jpg", imgS: "img/periferia.jpg" }
        ]
    },

    // 4. SCHEDA 2: ASCOLTO
    ascolto: {
        titolo: "🎧 Ascolto",
        tracciaAudio: "audio/traccia.mp3",
        istruzioni: "Inserisci qui le istruzioni per l'ascolto."
    },

    // 5. SCHEDA 3: LETTURA
    lettura: {
        titolo: "📖 Lettura",
        testo: [
            "Paragrafo 1 del testo...",
            "Paragrafo 2 del testo..."
        ]
    },

    // 6. SCHEDA 4: COMPRENSIONE
    comprensione: {
        titolo: "📝 Comprensione",
        domande: [
            { id: "domanda1", testo: "Domanda numero 1?" },
            { id: "domanda2", testo: "Domanda numero 2?" }
        ]
    },

    // 7. SCHEDA 5: GRAMMATICA
    grammatica: {
        titolo: "🧐 Alla scoperta della Grammatica",
        spiegazione: "Inserisci qui la regola o le attività di riflessione.",
        idLavagna: "grammatica_box"
    },

    // 8. SCHEDA 6: PRODUZIONE ORALE
    orale: {
        titolo: "💬 Produzione Orale",
        spunto: "Inserisci qui la situazione di roleplay o il tema del dibattito.",
        idLavagna: "orale_box"
    },

    // 9. SCHEDA 7: RINFORZO
    rinforzo: {
        titolo: "🛠️ Rinforzo",
        istruzioni: "Inserisci qui l'esercizio di consolidamento.",
        idLavagna: "rinforzo_box"
    },

    // 10. SCHEDA 8: AUTOVALUTAZIONE
    autovalutazione: {
        titolo: "🏁 Autovalutazione",
        idLavagna: "auto_box"
    }
};
