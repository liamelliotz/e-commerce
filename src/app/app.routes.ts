import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

//!metodo de rotas lazy loading e loadcomponent

export const routes: Routes = [
  {
    path: '', //!router para raiz localhost:4200/
    loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./features/produtos/lista-produtos/lista-produtos').then((m) => m.ListaProdutos),
  },
  {
    path: 'carrinho',
    canActivate: [authGuard],
    loadComponent: () => import('./features/carrinho/carrinho/carrinho').then((m) => m.Carrinho),
  },
  {
    path: '**',
    redirectTo: '',
  },
];