require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  'presets': [
    ['@babel/preset-env', {
      'targets': {
        'browsers': ['last 2 versions', 'safari >= 7']
      }
    }],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop'
  ],
  'plugins': [
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]
})

require('./src/server')
