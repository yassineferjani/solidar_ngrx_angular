import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { associationReducer } from './ngrx/association/association.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssociationEffects } from './ngrx/association/association.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  articleReducer } from './ngrx/article/article.reducer';
import { ArticleEffects } from './ngrx/article/article.effects';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({catalogAssociation:associationReducer,
      catalogArticle: articleReducer}),
    EffectsModule.forRoot([AssociationEffects, ArticleEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
