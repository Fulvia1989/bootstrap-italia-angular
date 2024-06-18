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
        path:'form-progetto',
        title: 'form-progetto',
        loadComponent: () => import('./components/form-progetto/form-progetto.component').then(m => m.FormProgettoComponent)
    }
];
