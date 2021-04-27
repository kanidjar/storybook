const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './assets/**/*.css',
            './apps/**/*.html',
            './apps/**/*.ts',
            './apps/**/*.css',
            './libs/**/*.html',
            './libs/**/*.ts',
            './libs/**/*.css'
        ]
    },
    darkMode: false, // or 'media' or 'class',
    theme: {
        extend: {}
    },
    plugins: []
};
