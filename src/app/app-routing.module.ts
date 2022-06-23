import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'abstract', loadChildren: () => import('./creational-patterns/abstract-fatory/abstract-factory.module').then(m => m.AbstractFactoryModule) },
  { path: 'builder', loadChildren: () => import('./creational-patterns/builder/pizza.module').then(m => m.PizzaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
