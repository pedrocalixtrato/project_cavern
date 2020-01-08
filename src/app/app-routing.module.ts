import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtigosListComponent} from './artigos/artigos-list/artigos-list.component';
import {LayoutComponent} from './base/base-shared/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'artigos',
        loadChildren: './artigos/artigos.module#ArtigosModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
