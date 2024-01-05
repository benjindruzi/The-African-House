/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: [],
    theme: {
        extend: {
            fontFamily: {
                'cormorant-upright': ['Cormorant Upright', 'sans-serif'],
            }
        },
    },
    plugins: [],
}