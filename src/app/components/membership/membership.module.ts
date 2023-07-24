import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipEditComponent } from './membership-edit/membership-edit.component';
import { MembershipNewComponent } from './membership-new/membership-new.component';
import { MembershipListComponent } from './membership-list/membership-list.component';
import { MembershipItemComponent } from './membership-list/membership-item/membership-item.component';
import { MembershipNavbarComponent } from './membership-navbar/membership-navbar.component';
import { MembershipComponent } from './membership.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MembershipEditComponent,
    MembershipNewComponent,
    MembershipListComponent,
    MembershipItemComponent,
    MembershipNavbarComponent,
    MembershipComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    ReactiveFormsModule
  ]
})
export class MembershipModule { }
