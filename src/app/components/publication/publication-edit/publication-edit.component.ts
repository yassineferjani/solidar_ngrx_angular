import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { editPublication, updatePublication } from 'src/app/ngrx/publication/publication.actions';
import { PublicationState } from 'src/app/store/publication/Publication.store';
import { PublicationStateEnum } from 'src/app/store/publication/PublicationStore.enum';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.css']
})
export class PublicationEditComponent implements OnInit {

  pubFormGroup?:FormGroup;
  state?:PublicationState;
  submitted:Boolean=false;
  readonly PublicationStateEnum = PublicationStateEnum;
  publicationId:number;

  constructor(private store:Store<any>,private fb:FormBuilder, private router:Router,
    private activatedRoute: ActivatedRoute){
      this.publicationId = activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.store.dispatch(editPublication({id : this.publicationId}))
    this.store.subscribe((state)=>{
      this.state = state.catalogPublication;
      this.pubFormGroup= this.fb.group({
        id:[this.state?.currentPublication?.id],
        author:[this.state?.currentPublication?.author,Validators.required],
        title:[this.state?.currentPublication?.title,Validators.required],
        intro:[this.state?.currentPublication?.intro,Validators.required],
        date:[this.state?.currentPublication?.date,Validators.required],
        images:[this.state?.currentPublication?.images,Validators.required],
        path:[this.state?.currentPublication?.path,Validators.required],

      });
    })

  }

  updated(){
    this.router.navigateByUrl("/publication");
  }

  onUpdatePub(){
    this.submitted=true;
    if(this.pubFormGroup?.invalid)
      return;
    this.store.dispatch(updatePublication({publication : this.pubFormGroup?.value}))

  }


}
