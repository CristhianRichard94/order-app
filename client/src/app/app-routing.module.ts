import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    data: { animation: 'any' }
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
    data: { animation: 'any' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
