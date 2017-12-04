import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
require( './style/main.sass' );
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);