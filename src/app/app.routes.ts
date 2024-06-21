import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch:'full'},
    {
        path:'login',
        title: 'Login',
        loadComponent: () => import('./mock-components/m-login/m-login.component').then(m => m.MLoginComponent)
    },
    {
        path:'progetti',
        title: 'Progetti',
        loadComponent: () => import('./components/lista-progetti/lista-progetti.component').then(m => m.ListaProgettiComponent)
    },
    {
        path:'progetti/dettaglio-progetto/:idProgetto',
        title: 'Dettaglio Progetto',
        loadComponent: () => import('./components/dettaglio-progetto/dettaglio-progetto.component').then(m => m.DettaglioProgettoComponent)
    },
    {
        path:'form-progetto',
        title: 'Form Progetto',
        loadComponent: () => import('./components/form-progetto/form-progetto.component').then(m => m.FormProgettoComponent)
    }
];
