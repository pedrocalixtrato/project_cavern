import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArtigosModule} from './artigos/artigos.module';
import {BaseSharedModule} from './base/base-shared/base-shared.module';
import {CatSmoothScrollDirective} from './base/base-shared/cat-smooth-scroll/cat-smooth-scroll.directive';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtigosModule,
    BaseSharedModule,
    HttpClientModule
  ],
  exports: [
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
