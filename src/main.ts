import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Update your application config to include HTTP providers
const updatedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(), provideClientHydration(withEventReplay())
  ]
};

bootstrapApplication(AppComponent, updatedConfig)
  .catch((err) => console.error(err));