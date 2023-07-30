import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPublication, newPublication } from 'src/app/ngrx/publication/publication.actions';
import { PublicationState } from 'src/app/store/publication/Publication.store';
import { PublicationStateEnum } from 'src/app/store/publication/PublicationStore.enum';

@Component({
  selector: 'app-publication-new',
  templateUrl: './publication-new.component.html',
  styleUrls: ['./publication-new.component.css']
})
export class PublicationNewComponent implements OnInit {
  pubFormGroup?:FormGroup;
  state?:PublicationState;
  readonly PublicationStateEnum = PublicationStateEnum;
  submitted:Boolean = false;

  constructor(private fb:FormBuilder, private store:Store<any>){}

  ngOnInit(): void {
    this.store.dispatch(newPublication())
    this.store.subscribe((state)=>{
        this.state = state.catalogPublication;
        if(this.state?.dataState == PublicationStateEnum.NEW){
          this.pubFormGroup = this.fb.group({
            author:["",Validators.required],
            title:["",Validators.required],
            intro:["",Validators.required],
            images:["",Validators.required],
            date:["",Validators.required],
            path:["",Validators.required],
          });
        }

    })
  }

  newPub(){
    this.store.dispatch(newPublication())
  }

  onSavePub(){
    this.submitted=true;
    if (this.pubFormGroup?.invalid)
      return
    this.store.dispatch(createPublication({publication : this.pubFormGroup?.value}))
  }

}
