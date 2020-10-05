const path = require('path');
module.exports = {
  name: '@_dipa/hub-client - SPA/PWA',
  short_name: '@_dipa/hub-client',
  description: '...',
  lang: 'de-DE',
  start_url: 'https://',
  display: 'standalone',
  orientation: 'any',
  theme_color: '#C8A2C8',
  background_color: '#DCD0FF',
  filename: 'manifest.json',
  icons: [
    {
      src: path.resolve('public/assets//dipa.logo.jpg'),
      sizes: [96, 128, 192, 256, 384, 512],
    },
  ],
  crossorigin: null,
  inject: true,
  fingerprints: false,
  ios: false,
  publicPath: null,
  includeDirectory: true,
};
