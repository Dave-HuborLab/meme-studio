# Meme Studio

App Grok Build per impaginare caroselli Instagram 4:5 (1080×1350), esportarli in PNG/ZIP e archiviare cosa hai pubblicato.

Repo: https://github.com/Dave-HuborLab/meme-studio

## Questa chat non pubblica su grok.me

Grok Build Mode (anteprima live + link `*.grok.me`) si apre dal selettore modalità **Build** su grok.com / app Grok. Questa conversazione è un agente di codice: può scrivere il progetto e pusharlo su GitHub, non può premere Publish.

## Come ottenere l'app Grok

1. Apri [grok.com](https://grok.com) o l'app Grok.
2. Selettore modalità → **Build**.
3. Incolla il contenuto di `GROK_BUILD_PROMPT.md`.
4. Quando l'anteprima va, **Publish** → ottieni `qualcosa.grok.me`.
5. Accesso: solo tu / chi ha il link / pubblico.

In alternativa, in Grok Build CLI:

```bash
git clone https://github.com/Dave-HuborLab/meme-studio
cd meme-studio
npm install
npm run dev
```

Publish resta nella UI Build di Grok.

## Dati

IndexedDB `meme-studio-v1` nell'origine da cui apri l'app (`localhost`, `*.grok.me`, ecc.). Backup JSON dalla scheda Backup.

Su grok.me l'hosting è di Grok; l'app non chiama Instagram né altre API.
