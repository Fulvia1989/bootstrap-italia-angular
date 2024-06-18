import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideDesignAngularKit(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimations(),
    ApiService,
    UserService
  ]
};
