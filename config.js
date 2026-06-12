// ─────────────────────────────────────────────────────────────────────────────
// CONFIG.JS — Torneo dei Quartieri Women · II Edizione 2026
// Modifica solo questo file per personalizzare il sito.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {

  // ── DATI GOOGLE SHEETS ────────────────────────────────────────────────────
  spreadsheetId: '14aBgW2ReFiRQNOEPJFG2rgApzQL9QOQvrx0eVfsmuYc',
  apiKey:        'AIzaSyAdN7BX1xID-YDW2ZwAoivSbAPbqz_Tr50',

  // ── IDENTITÀ ──────────────────────────────────────────────────────────────
  title:       'TORNEO DEI QUARTIERI WOMEN',
  titleAccent: 'QUARTIERI',
  edition:     'II EDIZIONE',
  tagline:     'Il torneo amatoriale di padel femminile che accende la passione sportiva nei rioni della città di Benevento.',
  eyebrow:     'Benevento · Padel Amatoriale · 2026',
  footerSub:   'II Edizione · Benevento 2026 · Padel Amatoriale Femminile',
  footerCredit:'Fatto con passione per i rioni di Benevento',
  pageTitle:   'Torneo dei Quartieri Women – II Edizione · Benevento Padel 2026',

  // ── SOCIAL ────────────────────────────────────────────────────────────────
  social: {
    facebook:  'https://www.facebook.com/groups/400903518309647',
    instagram: 'https://www.instagram.com/torneo_dei_rioni_padel_bn/',
  },

  // ── PALETTE ───────────────────────────────────────────────────────────────
  palette: {
    '--accent':       '#e8408a',
    '--accent-light': '#f06faa',
    '--accent-dim':   '#2a0d1a',
    '--accent-mid':   '#4d1a32',
    '--bg':           '#0c080a',
    '--bg2':          '#120d0f',
    '--card':         '#171114',
    '--border':       '#2b1e24',
    '--muted':        '#70505e',
    '--text':         '#f0e8ec',
    '--gold':         '#f5c842',
    '--cal-month-color': '#e8408a',
    '--map-filter': 'grayscale(0.2) invert(0.88) hue-rotate(300deg)',
  },

  // ── GIRONI ────────────────────────────────────────────────────────────────
  gironi: [
    {
      name:      'Traiano',
      label:     'GIRONE TRAIANO',
      color:     '#f06faa',
      cssVars: {
        '--g-color':  '#f06faa',
        '--g-dim':    '#2a0d17',
        '--g-mid':    '#4d1a2e',
        '--g-muted':  '#70405a',
      },
      dotCls:    'girone-dot-t',
      headerCls: 'gg-traiano',
      ptsCls:    'pts-traiano',
      cardCls:   'girone-traiano',
      filterPillCls: 'f-traiano',
      svgId:     'sym-traiano',
      svgViewBox:'0 0 64 64',
      svgPaths: `
        <rect x="0" y="57" width="64" height="7" rx="1" fill="currentColor"/>
        <rect x="0" y="52" width="64" height="5" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="0" y="14" width="64" height="39" rx="1" fill="currentColor"/>
        <rect x="4"  y="18" width="4" height="33" rx="0.5" fill="white" opacity="0.15"/>
        <rect x="10" y="18" width="4" height="33" rx="0.5" fill="white" opacity="0.15"/>
        <rect x="46" y="18" width="4" height="33" rx="0.5" fill="white" opacity="0.15"/>
        <rect x="56" y="18" width="4" height="33" rx="0.5" fill="white" opacity="0.15"/>
        <rect x="21" y="18" width="22" height="34" rx="0" fill="white" opacity="0.9"/>
        <path d="M21 26 C21 14 43 14 43 26" fill="currentColor"/>
        <rect x="0"  y="10" width="64" height="5" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="0"  y="0"  width="64" height="11" rx="1" fill="currentColor"/>
        <rect x="4"  y="3"  width="56" height="1.5" rx="0.5" fill="white" opacity="0.2"/>
        <rect x="4"  y="6"  width="56" height="1.5" rx="0.5" fill="white" opacity="0.2"/>`,
    },
    {
      name:      'Arechi',
      label:     'GIRONE ARECHI',
      color:     '#a09ae8',
      cssVars: {
        '--g-color':  '#a09ae8',
        '--g-dim':    '#0a0d2a',
        '--g-mid':    '#1a2050',
        '--g-muted':  '#40406f',
      },
      dotCls:    'girone-dot-a',
      headerCls: 'gg-arechi',
      ptsCls:    'pts-arechi',
      cardCls:   'girone-arechi',
      filterPillCls: 'f-arechi',
      svgId:     'sym-arechi',
      svgViewBox:'0 0 56 64',
      svgPaths: `
        <rect x="0"  y="58" width="56" height="6" rx="1" fill="currentColor"/>
        <rect x="4"  y="26" width="48" height="33" rx="1" fill="currentColor"/>
        <rect x="4"  y="26" width="48" height="2"  rx="0" fill="currentColor" opacity="0.6"/>
        <rect x="3"  y="18" width="5"  height="40" rx="0.5" fill="currentColor" opacity="0.7"/>
        <rect x="48" y="18" width="5"  height="40" rx="0.5" fill="currentColor" opacity="0.7"/>
        <path d="M4 27 C4 8 52 8 52 27" fill="currentColor"/>
        <path d="M4 27 C4 8 52 8 52 27" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
        <rect x="14" y="34" width="28" height="24" rx="0" fill="white" opacity="0.9"/>
        <path d="M14 46 C14 38 42 38 42 46" fill="currentColor"/>
        <rect x="22" y="46" width="12" height="12" rx="0.5" fill="currentColor"/>
        <polygon points="4,18 28,4 52,18" fill="currentColor"/>
        <rect x="25" y="0"  width="6"  height="8"  rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="27" y="0"  width="2"  height="5"  rx="0.5" fill="white" opacity="0.35"/>`,
    },
  ],

  // ── GIORNATE ──────────────────────────────────────────────────────────────
  giornate: {
    labels: ['I. Giornata','II. Giornata','III. Giornata'],
    roman:  ['I','II','III'],
  },

  // ── FEATURE FLAGS ─────────────────────────────────────────────────────────
  features: {
    calendarFilters: true,
    levelLegend:     false,
    loadMoreButton:  true,
  },

  // ── LEGENDA LIVELLI ───────────────────────────────────────────────────────
  levelLegend: [
    { label: 'Bianco',    cls: 'lev-white'  },
    { label: 'Giallo',    cls: 'lev-yellow' },
    { label: 'Verde',     cls: 'lev-green'  },
    { label: 'Arancione', cls: 'lev-orange' },
    { label: 'Rosso',     cls: 'lev-red'    },
  ],

  // ── STORICO EDIZIONI ──────────────────────────────────────────────────────
  storia: [
    { edition: 'I Edizione · 2025',  winner: 'MEDINA',     current: false },
    { edition: 'II Edizione · 2026', winner: 'In corso',   current: true  },
  ],

  // ── VENUE ─────────────────────────────────────────────────────────────────
  venue: {
    name:       'MOOD SPORT VILLAGE',
    subtitle:   '3 campi da padel · Coperti · Panoramici',
    address:    'Strada Provinciale 17\n82010 Sant\'Angelo a Cupolo (BN)\nCampania, Italia',
    hours:      'Tutti i giorni · 08:30 – 00:00',
    services:   '🅿️ Parcheggio gratuito\n🚿 Spogliatoi\n🍹 Bar & snack\n📶 WiFi\n🎾 Noleggio attrezzatura',
    playtomicUrl: 'https://playtomic.io/tenant/362372fa-8ece-439e-8a3b-42de92c3f824',
    mapsUrl:    'https://www.google.com/maps?q=41.09364247,14.81436365',
    imageUrl:   'https://res.cloudinary.com/playtomic/image/upload/c_scale,w_1200,q_80,f_auto/pro/tenants/362372fa-8ece-439e-8a3b-42de92c3f824/1708523265153',
    embedUrl:   'https://maps.google.com/maps?q=41.09364247,14.81436365&z=15&output=embed',
  },

  // ── COLORI SQUADRE ────────────────────────────────────────────────────────
  squadreColori: [
    { h:'#7a1a4a', b:'#3d0d24', t:'#f06faa', dim:'rgba(240,111,170,0.12)' },
    { h:'#6b1a5a', b:'#3d0d32', t:'#e870d0', dim:'rgba(232,112,208,0.12)' },
    { h:'#7a1a2e', b:'#3d0d17', t:'#f07090', dim:'rgba(240,112,144,0.12)' },
    { h:'#5a1a6b', b:'#320d3d', t:'#c06fe8', dim:'rgba(192,111,232,0.12)' },
    { h:'#7a3a1a', b:'#3d1e0d', t:'#e8904f', dim:'rgba(232,144,79,0.12)'  },
    { h:'#1a1a7a', b:'#0d0d3d', t:'#6f70f0', dim:'rgba(111,112,240,0.12)' },
    { h:'#6b1a1a', b:'#3d0d0d', t:'#e87070', dim:'rgba(232,112,112,0.12)' },
    { h:'#7a1a6b', b:'#3d0d38', t:'#f06fe0', dim:'rgba(240,111,224,0.12)' },
    { h:'#4a1a7a', b:'#250d3d', t:'#a06fe8', dim:'rgba(160,111,232,0.12)' },
    { h:'#7a4a1a', b:'#3d250d', t:'#e8b06f', dim:'rgba(232,176,111,0.12)' },
    { h:'#1a4a7a', b:'#0d253d', t:'#6fb0e8', dim:'rgba(111,176,232,0.12)' },
    { h:'#7a1a3a', b:'#3d0d1e', t:'#f06f90', dim:'rgba(240,111,144,0.12)' },
    { h:'#3a1a7a', b:'#1e0d3d', t:'#906fe8', dim:'rgba(144,111,232,0.12)' },
    { h:'#1a6b3a', b:'#0d3d1e', t:'#6fe8a0', dim:'rgba(111,232,160,0.12)' },
  ],

};
