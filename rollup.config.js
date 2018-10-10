import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';

const { version, author } = require('./package.json');

export default {
    input: 'src/scripts/app.js',
    output: {
        file: 'dist/scripts/bundle.js',
        format: 'iife'
    },
    watch: {
        exclude: ['node_modules/**']
    },
    plugins: [
        scss({
            output: 'dist/styles/bundle.css',
        }),
        serve('./'),
        replace({
            delimiters: [
                '{{',
                '}}'
            ],
            version,
            author
        })
    ]
};
