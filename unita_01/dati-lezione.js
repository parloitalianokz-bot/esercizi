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

    // 3. SCHEDA 1: ESPLORAZIONE E GIOCO LESSICALE
    elicitazione: {
        titolo: "✨ Conosci l'Italia e i personaggi?",
        intro: "Osserva la mappa e le flashcard. Clicca sulle immagini per ascoltare e memorizzare le parole. Poi, quando ti senti pronto, scendi per giocare!",
        immagineMappa: "img/mappa_italia.jpg",
        
        vocabolario: [
            // LUOGHI
            { parola: "L'albergo", audio: "audio/albergo.mp3", img: "img/albergo.jpg" },
            { parola: "Il centro", audio: "audio/centro.mp3", img: "img/centro.jpg" },
            { parola: "Le camere", audio: "audio/camere.mp3", img: "img/camere.jpg" },
            // PROFESSIONI
            { parola: "L'avvocato", audio: "audio/avvocato.mp3", img: "img/avvocato.jpg" },
            { parola: "Lo studente", audio: "audio/studente.mp3", img: "img/studente.jpg" },
            { parola: "L'insegnante", audio: "audio/insegnante.mp3", img: "img/insegnante.jpg" },
            { parola: "Il dentista", audio: "audio/dentista.mp3", img: "img/dentista.jpg" },
            { parola: "Il direttore", audio: "audio/direttore.mp3", img: "img/direttore.jpg" },
            // AGGETTIVI
            { parola: "Grande", audio: "audio/grande.mp3", img: "img/grande.jpg" },
            { parola: "Comodo", audio: "audio/comodo.mp3", img: "img/comodo.jpg" },
            { parola: "Occupato", audio: "audio/occupato.mp3", img: "img/occupato.jpg" }
        ],

        // Dati necessari per la modalità "Gioco delle scelte"
        gioco: [
            { parola: "L'albergo", audio: "audio/albergo.mp3", imgC: "img/albergo.jpg", imgS: "img/scuola.jpg" },
            { parola: "Firenze", audio: "audio/firenze.mp3", imgC: "img/firenze.jpg", imgS: "img/roma.jpg" },
            { parola: "Il centro", audio: "audio/centro.mp3", imgC: "img/centro.jpg", imgS: "img/periferia.jpg" },
            { parola: "La camera", audio: "audio/camere.mp3", imgC: "img/camere.jpg", imgS: "img/bagno.jpg" },
            { parola: "L'avvocato", audio: "audio/avvocato.mp3", imgC: "img/avvocato.jpg", imgS: "img/medico.jpg" },
            { parola: "Lo studente", audio: "audio/studente.mp3", imgC: "img/studente.jpg", imgS: "img/insegnante.jpg" },
            { parola: "L'insegnante", audio: "audio/insegnante.mp3", imgC: "img/insegnante.jpg", imgS: "img/meccanico.jpg" },
            { parola: "Il dentista", audio: "audio/dentista.mp3", imgC: "img/dentista.jpg", imgS: "img/cuoco.jpg" },
            { parola: "Il direttore", audio: "audio/direttore.mp3", imgC: "img/direttore.jpg", imgS: "img/cameriere.jpg" },
            { parola: "Grande", audio: "audio/grande.mp3", imgC: "img/grande.jpg", imgS: "img/piccolo.jpg" },
            { parola: "Comodo", audio: "audio/comodo.mp3", imgC: "img/comodo.jpg", imgS: "img/scomodo.jpg" },
            { parola: "Occupato", audio: "audio/occupato.mp3", imgC: "img/occupato.jpg", imgS: "img/libero.jpg" }
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
