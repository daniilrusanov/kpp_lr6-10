import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'view-product-component',
    loadComponent: () => import('./pages/view-product-component/view-product-component.page').then((m) => m.ViewProductComponentPage),
  },
  {
    path: '',
    redirectTo: 'view-product-component',
    pathMatch: 'full',
  },
  {
    path: 'filter-page',
    loadComponent: () => import('./pages/filter-page/filter-page.page').then( m => m.FilterPagePage)
  },
  {
    path: 'pipe-project',
    loadComponent: () => import('./pages/pipe-project/pipe-project.page').then( m => m.PipeProjectPage)
  },
];
