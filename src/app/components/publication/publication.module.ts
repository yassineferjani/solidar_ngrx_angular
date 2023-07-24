import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationNavbarComponent } from './publication-navbar/publication-navbar.component';
import { PublicationComponent } from './publication.component';
import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationItemComponent } from './publication-list/publication-item/publication-item.component';
import { PublicationNewComponent } from './publication-new/publication-new.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicationNavbarComponent,
    PublicationComponent,
    PublicationListComponent,
    PublicationItemComponent,
    PublicationNewComponent,
    PublicationEditComponent
  ],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicationModule { }
