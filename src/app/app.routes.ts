import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'view-product-component',
    loadComponent: () => import('./view-product-component/view-product-component.page').then((m) => m.ViewProductComponentPage),
  },
  {
    path: '',
    redirectTo: 'view-product-component',
    pathMatch: 'full',
  },
];
