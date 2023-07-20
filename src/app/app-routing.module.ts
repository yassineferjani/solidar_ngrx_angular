import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from './components/association/association.component';

const routes: Routes = [
  {path:"association", loadChildren:()=>import("./components/association/association.module")
    .then(m=> m.AssociationModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
