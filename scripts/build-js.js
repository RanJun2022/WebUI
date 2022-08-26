const fs = require('./utils/fs-extra.js');
const config = require("./core-config");
const path = require('path')
const replace = require('@rollup/plugin-replace');
const { rollup } = require('rollup');
const { default: babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { minify } = require('terser');

async function buildJs() {
    const components = [];
    config.components.forEach((name) => {
        // eslint-disable-next-line
        const capitalized = name
            .split('-')
            .map((word) => {
                return word
                    .split('')
                    .map((char, index) => {
                        if (index === 0) return char.toUpperCase();
                        return char;
                    })
                    .join('');
            })
            .join('');
        const jsFilePath = `./src/js/${name}/${name}.js`;
        if (fs.existsSync(jsFilePath)) {
            components.push({ name, capitalized });
        }
    });

    await umdBundle({ components });
}

let cache;
async function umdBundle({ components } = {}) {
    const env = 'production';
    const format = 'umd';
    const output = path.resolve(`build`, 'libs/js');
    const banner = '//v1.0.0\n';
    const outputName = 'mini'

    return rollup({
        input: './src/js/app.js',
        cache,
        treeshake: false,
        plugins: [
            replace({
                delimiters: ['', ''],
                'process.env.NODE_ENV': JSON.stringify(env), // or 'production'
                'process.env.FORMAT': JSON.stringify(format),
                '//IMPORT_COMPONENTS': components
                    .map(
                        (component) =>
                            `import ${component.capitalized} from './js/${component.name}/${component.name}.js';`,
                    )
                    .join('\n'),
                '//INSTALL_COMPONENTS': components.map((component) => component.capitalized).join(',\n  '),
                '//IMPORT_HELPERS': '',
                '//NAMED_EXPORT': '',
                'export { $ as Dom7, request, utils, getDevice, getSupport, createStore, $jsx };': '',
            }),
            nodeResolve({ mainFields: ['module', 'main', 'jsnext'] }),
            babel({ babelHelpers: 'bundled' }),
            commonjs(),
        ],
        onwarn(warning, warn) {
            const ignore = ['EVAL'];
            if (warning.code && ignore.indexOf(warning.code) >= 0) {
                return;
            }
            warn(warning);
        },
    })
        .then((bundle) => {
            cache = bundle;
            return bundle.write({
                strict: true,
                file: `${output}/${outputName}.js`,
                format: 'umd',
                name: 'WebApp',
                sourcemap: env === 'production',
                sourcemapFile: `${output}/${outputName}.js.map`,
                banner,
            });
        })
        .then(async (bundle) => {
            if (env === 'development') {
                return;
            }
            const result = bundle.output[0];
            const minified = await minify(result.code, {
                sourceMap: {
                    content: env === 'production' ? result.map : undefined,
                    filename: env === 'production' ? '${outputName}.min.js' : undefined,
                    url: `${outputName}.min.js.map`,
                },
                output: {
                    preamble: banner,
                },
            });

            fs.writeFileSync(`${output}/${outputName}.min.js`, minified.code);
            fs.writeFileSync(`${output}/${outputName}.min.js.map`, minified.map);
        })
        .catch((err) => {
            console.log(err);
        });
}

async function umdCore() {
    const env = process.env.NODE_ENV || 'development';
    const format = process.env.FORMAT || config.format || 'umd';
    const output = path.resolve(`build`, 'libs/js');

    return rollup({
        input: './src/js/app.js',
        plugins: [
            replace({
                delimiters: ['', ''],
                'process.env.NODE_ENV': JSON.stringify(env), // or 'production'
                'process.env.FORMAT': JSON.stringify(format),
                '//IMPORT_COMPONENTS': '',
                '//INSTALL_COMPONENTS': '',
                '//IMPORT_HELPERS': '',
                '//NAMED_EXPORT': '',
                'export { $ as Dom7, request, utils, getDevice, getSupport, createStore, $jsx };': '',
            }),
            nodeResolve({ mainFields: ['module', 'main', 'jsnext'] }),
            babel({ babelHelpers: 'bundled' }),
            commonjs(),
        ],
        onwarn(warning, warn) {
            const ignore = ['EVAL'];
            if (warning.code && ignore.indexOf(warning.code) >= 0) {
                return;
            }
            warn(warning);
        },
    })
        .then((bundle) => {
            // eslint-disable-line
            return bundle.write({
                strict: true,
                file: `${output}/framework7.js`,
                format: 'umd',
                name: 'Framework7',
                sourcemap: env === 'production',
                sourcemapFile: `${output}/framework7.js.map`,
                banner,
            });
        })
        .then(async (bundle) => {
            if (env === 'development') {
                return;
            }
            const result = bundle.output[0];
            const minified = await minify(result.code, {
                sourceMap: {
                    content: env === 'production' ? result.map : undefined,
                    filename: env === 'production' ? 'framework7.min.js' : undefined,
                    url: `framework7.min.js.map`,
                },
                output: {
                    preamble: banner,
                },
            });

            fs.writeFileSync(`${output}/framework7.min.js`, minified.code);
            fs.writeFileSync(`${output}/framework7.min.js.map`, minified.map);
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = buildJs;