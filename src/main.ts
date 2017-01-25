import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { KgdNg2WidgetsModule } from './kgdng2widgets/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(KgdNg2WidgetsModule);
