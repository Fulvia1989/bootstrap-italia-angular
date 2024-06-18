import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader, } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideDesignAngularKit } from 'design-angular-kit';
import { ApiService } from './services/api.service';

import { routes } from './app.routes';
import { UserService } from './services/user.service';
import localeFr from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideDesignAngularKit(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'it-IT' },
    ApiService,
    UserService
  ]
};
