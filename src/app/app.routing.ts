import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: '', component: HeaderComponent, outlet: 'header' },
  {
    path: '',
    component: HomeComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
