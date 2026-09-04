# Meme Studio — Grok Build

App Grok per @digitalalkemist: impagina caroselli Instagram 4:5, esporta PNG, archivia i post.

## Vincoli
- Nessuna API Instagram, nessun login, nessuna generazione automatica di testi o immagini.
- Nessuna chiamata di rete dall'app (niente fetch verso servizi esterni). JSZip è dipendenza npm, non CDN.
- Persistenza solo IndexedDB `meme-studio-v1` + fallback localStorage.
- Font solo di sistema.
- Canvas export 1080x1350. Slide da 3 a 8.

## Stack
Vite + React 18 + Tailwind 3 + JSZip.

## Non fare
- Non aggiungere pubblicazione su Instagram.
- Non collegare le API Grok per scrivere caption o generare slide.
- Non usare Google Fonts.
