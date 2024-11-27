import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './java//modules/app.module.ts';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
