import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association.component';
import { AssociationListComponent } from './association-list/association-list.component';
import { AssociationItemComponent } from './association-list/association-item/association-item.component';
import { AssociationNavbarComponent } from './association-navbar/association-navbar.component';
import { AssociationNewComponent } from './association-new/association-new.component';
import { AssociationEditComponent } from './association-edit/association-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AssociationComponent,
    AssociationListComponent,
    AssociationItemComponent,
    AssociationNavbarComponent,
    AssociationNewComponent,
    AssociationEditComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    

  ]
})
export class AssociationModule { }
