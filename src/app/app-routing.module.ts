import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'abstract-factory', loadChildren: () => import('./creational-patterns/abstract-fatory/abstract-factory.module').then(m => m.AbstractFactoryModule) },
  { path: 'builder', loadChildren: () => import('./creational-patterns/builder/pizza.module').then(m => m.PizzaModule) },
  { path: 'abstract-method', loadChildren: () => import('./creational-patterns/abstract-method/logistics.module').then(m => m.LogisticsModule) },
  { path: 'prototype', loadChildren: () => import('./creational-patterns/prototype/prototype.module').then(m => m.PrototypeModule) },
  { path: 'singleton', loadChildren: () => import('./creational-patterns/singleton/singleton.module').then(m => m.SingletonModule) },
  { path: 'adapter', loadChildren: () => import('./structural-patterns/adapter/singleton.module').then(m => m.AdapterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
