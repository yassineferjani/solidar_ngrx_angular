import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"association", loadChildren:()=>import("./components/association/association.module")
    .then(m=> m.AssociationModule)
}, 
  {path:"article",loadChildren:()=>import("./components/article/article.module")
  .then(m=>m.ArticleModule)
  },

  {
    path:"membership", loadChildren:()=> import("./components/membership/membership.module")
  .then(m=>m.MembershipModule)
},
  {
    path:"publication", loadChildren:()=>import("./components/publication/publication.module")
    .then(m=>m.PublicationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
