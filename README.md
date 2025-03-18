# Portfolio Personal

Un portofoliu personal modern dezvoltat cu React, TypeScript și Tailwind CSS, prezentând experiența, proiectele și competențele într-un design elegant și responsive.

## Tehnologii Utilizate

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Modal
- Lucide React (pentru iconițe)

## Cerințe Preliminare

Înainte de a începe, asigură-te că ai instalat:

- Node.js (versiunea 16.0.0 sau mai nouă)
- npm (vine împreună cu Node.js)

## Instalare

1. Clonează repository-ul:
   ```bash
   git clone <url-repository>
   cd portfolio-personal
   ```

2. Instalează dependențele:
   ```bash
   npm install
   ```

## Dezvoltare Locală

Pentru a rula proiectul în modul de dezvoltare:

```bash
npm run dev
```

Aceasta va porni serverul de dezvoltare la `http://localhost:5173`

## Build pentru Producție

Pentru a construi versiunea de producție:

```bash
npm run build
```

Pentru a previzualiza versiunea de producție local:

```bash
npm run preview
```

## Structura Proiectului

```
portfolio-personal/
├── public/
│   └── images/         # Imagini statice
├── src/
│   ├── App.tsx        # Componenta principală
│   ├── main.tsx       # Punct de intrare
│   └── index.css      # Stiluri globale
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Personalizare

1. Imagini și Conținut
   - Înlocuiește imaginea de profil din `public/images/`
   - Actualizează informațiile personale în `src/App.tsx`

2. Stilizare
   - Modifică tema și culorile în `tailwind.config.js`
   - Ajustează stilurile în `src/index.css`

## Licență

Acest proiect este licențiat sub [MIT License](LICENSE).