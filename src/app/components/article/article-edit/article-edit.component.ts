import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { editArticle, updateArticle } from 'src/app/ngrx/article/article.actions';
import { ArticleState } from 'src/app/store/article/Article.store';
import { ArticleStateEnum } from 'src/app/store/article/ArticleStore.enum';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent {
  articleId:number;
  submitted:Boolean=false;
  state?:ArticleState;
  articleFormGroup!:FormGroup;
  formBuilt:Boolean=false;
  readonly ArticleStateEnum = ArticleStateEnum;
  
  constructor(private activatedRoute:ActivatedRoute, private store:Store<any>, 
    private fb:FormBuilder, private router: Router){
      this.articleId = activatedRoute.snapshot.params['id']
    }

  ngOnInit(): void {
    this.store.dispatch(editArticle({id: this.articleId}));
    this.store.subscribe(
      (state)=> {this.state=state.catalogArticle
      this.articleFormGroup = this.fb.group({
        id:[this.state?.currentArticle?.id],
        author:[this.state?.currentArticle?.author,Validators.required],
        title:[this.state?.currentArticle?.title,Validators.required],
        text:[this.state?.currentArticle?.text,Validators.required],
        date:[this.state?.currentArticle?.date,Validators.required],
        images:[this.state?.currentArticle?.images,Validators.required],

      })
      this.formBuilt=true;
  })

  }



  updated(){
    this.router.navigateByUrl("/article");
  
  }

  onUpdateArticle(){
    this.submitted=true;
    if (this.articleFormGroup.invalid)
      return;
    this.store.dispatch(updateArticle({article : this.articleFormGroup.value}))
  }
}

