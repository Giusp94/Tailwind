TAILWIND

-This site is build with Tailwind CSS, it is a test for to study Tailwind.

LIBRARY

-Vite
-React && JS
npm create vite@latest my-app

-Tailwind(Con Vite https://tailwindcss.com/docs/guides/vite)
1-npm install -D tailwindcss postcss autoprefixer
2-npx tailwindcss init -p
3-Sovrscrivi il codice in tailwind.config.js con questo:
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
4-Aggiungere le direttive Tailwind a './src/index.css'
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

----La customizzazione in Tailwind avviene sfruttando l'oggetto theme
    theme in tailwind.config.JS.
    Inserendo altri oggetti che avranno il nome della proprietà, la chiave con il nome desiderato e
    il valore in stringa
    ESEMPIO
    export default {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
            extend: {
                colors: {
                    "twitter-blu": "#1DA1F2"
                },
            },
        },
        plugins: [],
    };

    Facendo come nell'esempio preserviamo i valori predefiniti e aggiungiamo nuovi valori

-Prettier Plugin tailwindcss
npm install -D prettier prettier-plugin-tailwindcss
