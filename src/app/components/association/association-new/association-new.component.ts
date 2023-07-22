import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createAssociation, newAssociation } from 'src/app/ngrx/association/association.actions';
import { AssociationState, AssociationStateEnum } from 'src/app/ngrx/association/association.reducer';

@Component({
  selector: 'app-association-new',
  templateUrl: './association-new.component.html',
  styleUrls: ['./association-new.component.css']
})
export class AssociationNewComponent implements OnInit {

  associationFormGroup?:FormGroup;
  state?: AssociationState;
  readonly AssociationStateEnum = AssociationStateEnum;
  submitted:Boolean = false;
  
  constructor(private store:Store<any>, 
    private fb:FormBuilder){}

  ngOnInit(): void {
    this.store.dispatch(newAssociation())
    this.store.subscribe((state)=> {
      this.state = state.catalogAssociation;
      if(this.state?.dataState == AssociationStateEnum.NEW){
        this.associationFormGroup = this.fb.group({
          name:["",Validators.required],
          address:["",Validators.required],
          logo:["",Validators.required],
          dateCreation:["",Validators.required],
        });      
      }
    })
  }

  newAssociation(){
    this.store.dispatch(newAssociation())
  }

  onSaveAssociation(){
    if (this.associationFormGroup?.invalid)
      return;
    this.store.dispatch(createAssociation(this.associationFormGroup?.value))
  }

}
