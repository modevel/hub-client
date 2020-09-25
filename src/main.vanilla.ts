import './components/app/component.vanilla';

import { DI } from '@leanup/lib/helpers/injector';

DI.register('Framework', {
  name: 'Vanilla',
  version: null,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.appendChild(document.createElement('wc-app'));
}
