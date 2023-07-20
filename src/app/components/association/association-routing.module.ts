import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from './association.component';
import { AssociationNewComponent } from './association-new/association-new.component';
import { AssociationEditComponent } from './association-edit/association-edit.component';

const routes: Routes = [
{path:"" , component:AssociationComponent},
{path:"new" , component:AssociationNewComponent},
{path:"edit" , component:AssociationEditComponent},

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule { }
