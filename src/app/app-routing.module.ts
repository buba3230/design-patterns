import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'abstract-factory', loadChildren: () => import('./creational-patterns/abstract-fatory/abstract-factory.module').then(m => m.AbstractFactoryModule) },
  { path: 'builder', loadChildren: () => import('./creational-patterns/builder/pizza.module').then(m => m.PizzaModule) },
  { path: 'abstract-method', loadChildren: () => import('./creational-patterns/abstract-method/logistics.module').then(m => m.LogisticsModule) },
  { path: 'prototype', loadChildren: () => import('./creational-patterns/prototype/prototype.module').then(m => m.PrototypeModule) },
  { path: 'singleton', loadChildren: () => import('./creational-patterns/singleton/singleton.module').then(m => m.SingletonModule) },
  { path: 'adapter', loadChildren: () => import('./structural-patterns/adapter/adapter.module').then(m => m.AdapterModule) },
  { path: 'bridge', loadChildren: () => import('./structural-patterns/bridge/bridge.module').then(m => m.BridgeModule) },
  { path: 'composite', loadChildren: () => import('./structural-patterns/composite/composite.module').then(m => m.CompositeModule) },
  { path: 'decorator', loadChildren: () => import('./structural-patterns/decorator/decorator.module').then(m => m.DecoratorModule) },
  { path: 'facade', loadChildren: () => import('./structural-patterns/facade/facade.module').then(m => m.FacadeModule) },
  { path: 'flyweight', loadChildren: () => import('./structural-patterns/flyweight/forest.module').then(m => m.ForestModule) },
  { path: 'proxy', loadChildren: () => import('./structural-patterns/proxy/proxy.module').then(m => m.ProxyModule) },
  { path: 'chain-of-responsibility', loadChildren: () => import('./behavioral-patterns/chain-of-responsibility/chain.module').then(m => m.ChainModule) },
  { path: 'command', loadChildren: () => import('./behavioral-patterns/command/command.module').then(m => m.CommandModule) },
  { path: 'iterator', loadChildren: () => import('./behavioral-patterns/iterator/iterator.module').then(m => m.IteratorModule) },
  { path: 'mediator', loadChildren: () => import('./behavioral-patterns/mediator/mediator.module').then(m => m.MediatorModule) },
  { path: 'memento', loadChildren: () => import('./behavioral-patterns/memento/memento.module').then(m => m.MementoModule) },
  { path: 'observer', loadChildren: () => import('./behavioral-patterns/observer/observer.module').then(m => m.ObserverModule) },
  { path: 'state', loadChildren: () => import('./behavioral-patterns/state/state.module').then(m => m.StateModule) },
  { path: 'strategy', loadChildren: () => import('./behavioral-patterns/strategy/strategy.module').then(m => m.StrategyModule) },
  { path: 'template-method', loadChildren: () => import('./behavioral-patterns/template-method/template-method.module').then(m => m.TemplateMethodModule) },
  { path: 'visitor', loadChildren: () => import('./behavioral-patterns/visitor/visitor.module').then(m => m.VisitorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
