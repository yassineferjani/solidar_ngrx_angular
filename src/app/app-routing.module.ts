import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from './components/association/association.component';

const routes: Routes = [
  {path:"association", loadChildren:()=>import("./components/association/association.module")
    .then(m=> m.AssociationModule)
}, 
  {path:"article",loadChildren:()=>import("./components/article/article.module")
  .then(m=>m.ArticleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
