import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

 // import './style/style.scss';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);