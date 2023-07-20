import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociationComponent } from './components/association/association.component';
import { AssociationListComponent } from './components/association/association-list/association-list.component';
import { AssociationNavbarComponent } from './components/association/association-navbar/association-navbar.component';
import { AssociationNewComponent } from './components/association/association-new/association-new.component';
import { AssociationEditComponent } from './components/association/association-edit/association-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssociationItemComponent } from './components/association/association-list/association-item/association-item.component';
import { StoreModule } from '@ngrx/store';
import { associationReducer } from './ngrx/association/association.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssociationEffects } from './ngrx/association/association.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AssociationComponent,
    AssociationListComponent,
    AssociationItemComponent,
    AssociationNavbarComponent,
    AssociationNewComponent,
    AssociationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({catalogAssociation:associationReducer}),
    EffectsModule.forRoot([AssociationEffects]),
    StoreDevtoolsModule.instrument(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
