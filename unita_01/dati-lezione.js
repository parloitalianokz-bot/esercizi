/**
 * DATI LEZIONE - CONFIGURAZIONE
 * Sostituisci i valori in questa configurazione per creare ogni nuova lezione.
 */

export const ConfigLezione = {
    // 1. ID UNIVOCO (Cambialo per ogni lezione per separare i dati su Firebase)
    idFirebase: "unita_01_albergo",

    // 2. INTESTAZIONE
    titolo: "Titolo dell'Unità",
    sottotitolo: "Breve descrizione o livello (es. A1)",
    bannerImg: "img/banner.jpg",

    // 3. SCHEDA 1: ELICITAZIONE E GIOCO LESSICALE
    elicitazione: {
        intro: "Inserisci qui l'intro della fase di elicitazione.",
        gioco: [
            { parola: "Esempio", audio: "audio/esempio.mp3", imgC: "img/c1.jpg", imgS: "img/s1.jpg" }
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

    // 6. SCHEDA 4: COMPRENSIONE (Lista di oggetti)
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
