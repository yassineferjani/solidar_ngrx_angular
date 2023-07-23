import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createArticle, newArticle } from 'src/app/ngrx/article/article.actions';
import { ArticleState } from 'src/app/store/Article.store';
import { ArticleStateEnum } from 'src/app/store/ArticleStore.enum';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit{
  articleFormGroup?:FormGroup;
  state?: ArticleState;
  readonly ArticleStateEnum = ArticleStateEnum;
  submitted:Boolean = false;
  
  constructor(private store:Store<any>, 
    private fb:FormBuilder){}

  ngOnInit(): void {
    this.store.dispatch(newArticle())
    this.store.subscribe((state)=> {
      this.state = state.catalogArticle;
      if(this.state?.dataState == ArticleStateEnum.NEW){
        this.articleFormGroup = this.fb.group({
          author:["",Validators.required],
          title:["",Validators.required],
          text:["",Validators.required],
          images:["",Validators.required],
          date:["",Validators.required],
        });      
      }
    })
  }

  newArticle(){
    this.store.dispatch(newArticle())
  }

  onSaveArticle(){
    if (this.articleFormGroup?.invalid)
      return;
    this.store.dispatch(createArticle({article : this.articleFormGroup?.value}))
  }
}