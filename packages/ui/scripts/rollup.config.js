import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssenv from 'postcss-preset-env'
import analyze from 'rollup-plugin-analyzer'
import svgr from '@svgr/rollup'

export default [
  {
    input: 'src/components/index.js',
    output: {
      name: 'index',
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        react: 'React',
        classnames: 'classnames',
      }
    },
    plugins: [
      analyze(),
      peerDepsExternal(),
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      svgr(),
      commonjs(),
      terser({
        output: {
          comments: false
        }
      }),
      postcss({
        extract: 'dist/style.css',
        modules: {
          generateScopedName: '[hash:base64:4]'
        },
        use: ['sass'],
        plugins: [
          cssenv(),
          simplevars(),
          nested(),
        ]
      })
    ],
    external: ['react','react-dom','classnames'],
  },
  {
    input: 'src/icons/index.js',
    output: {
      file: 'src/icons/index.js',
      format: 'cjs',
    },
    plugins: [
      svgr(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js','.svg'],
      })
    ]
  }
]