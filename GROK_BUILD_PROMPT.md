# Prompt da incollare in Grok → modalità Build

Costruisci un'app web chiamata Meme Studio per un creator Instagram (@digitalalkemist, nicchia AI / tool / automazioni).

È un tool operativo, non un generatore. Dark mode di default, usabile da telefono.

NON fare: login, publish su Instagram, generazione testi/immagini, scan trend, Google Fonts, chiamate API, video.

## Funzioni
1. Import JSON bozza con validazione errori leggibili, più creazione bozza vuota. Schema:
{"meme":"","formato":"","fonte":"","caption":"","hashtags":[""],"cta":"","canzoni":[{"titolo":"","artista":"","perche":""}],"slides":[{"testo":"","nota":""}]}
Includi un pulsante "Carica esempio" con 4 slide già scritte.
2. Editor canvas 1080x1350 (4:5), 3-8 slide. Per slide: testo, align sx/centro/dx, posizione alto/centro/basso, size, font di sistema (sans/serif/mono/impact), sfondo colore / gradiente / immagine locale + overlay scuro. Riordino drag-and-drop, duplica, elimina. 3 preset (Notte nero/oro, Signal gradiente teal, Carta crema/serif) + preset salvabili.
3. Export PNG 1080x1350 nominate 01.png, 02.png…; scarica tutte; ZIP con JSZip da npm (non CDN); copia caption+CTA+hashtag.
4. Libreria hashtag a gruppi (AI, Automazioni, Generici) con nota per tag; inserisci un gruppo nella caption con un click.
5. Archivio: stati bozza/esportata/pubblicata/scartata; anteprima prima slide; canzone; campi manuali view/save/commenti/nota. Ricerca e filtri stato/meme/periodo.
6. Persistenza IndexedDB (meme-studio-v1) + fallback localStorage. Export/import backup JSON.

Stack: Vite + React + Tailwind. Persistenza solo nel browser. Nessun fetch verso servizi esterni.
