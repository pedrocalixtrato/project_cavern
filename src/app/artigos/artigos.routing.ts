import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtigosListComponent} from './artigos-list/artigos-list.component';

export const artigosRoutes: Routes = [
  {
    path: '',
    component: ArtigosListComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(artigosRoutes)
  ],
})
export class ArtigosRouting { }
