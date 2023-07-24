import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationComponent } from './publication.component';
import { PublicationNewComponent } from './publication-new/publication-new.component';
import { PublicationEditComponent } from './publication-edit/publication-edit.component';

const routes: Routes = [
  {path:"" , component:PublicationComponent},
  {path:"new" , component:PublicationNewComponent},
  {path:"edit/:id" , component:PublicationEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
