import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipComponent } from './membership.component';
import { MembershipNewComponent } from './membership-new/membership-new.component';
import { MembershipEditComponent } from './membership-edit/membership-edit.component';

const routes: Routes = [
  {path:"" , component:MembershipComponent},
  {path:"new" , component:MembershipNewComponent},
  {path:"edit/:id" , component:MembershipEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
