import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArtigosListComponent} from './artigos-list/artigos-list.component';
import {ArtigosRouting} from './artigos.routing';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AppModule} from '../app.module';
import {CatSmoothScrollDirective} from '../base/base-shared/cat-smooth-scroll/cat-smooth-scroll.directive';


@NgModule({
  declarations: [
    ArtigosListComponent,
    CatSmoothScrollDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ArtigosRouting,
    ScrollingModule,
  ],
  exports: [
    CatSmoothScrollDirective
  ]
})
export class ArtigosModule { }
