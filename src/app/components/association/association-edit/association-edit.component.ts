import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { editAssociation, updateAssociation } from 'src/app/ngrx/association/association.actions';
import { AssociationState, AssociationStateEnum } from 'src/app/ngrx/association/association.reducer';

@Component({
  selector: 'app-association-edit',
  templateUrl: './association-edit.component.html',
  styleUrls: ['./association-edit.component.css']
})
export class AssociationEditComponent implements OnInit {
  
  associationId:number;
  submitted:Boolean=false;
  state?:AssociationState;
  associationFormGroup!:FormGroup;
  formBuilt:Boolean=false;
  readonly AssociationStateEnum = AssociationStateEnum;
  
  constructor(private activatedRoute:ActivatedRoute, private store:Store<any>, 
    private fb:FormBuilder, private router: Router){
      this.associationId = activatedRoute.snapshot.params['id']
    }

  ngOnInit(): void {
    this.store.dispatch(editAssociation({id: this.associationId}));
    this.store.subscribe(
      (state)=> {this.state=state.catalogAssociation
      this.associationFormGroup = this.fb.group({
        id:[this.state?.currentAssociation?.id],
        name:[this.state?.currentAssociation?.name,Validators.required],
        address:[this.state?.currentAssociation?.address,Validators.required],
        logo:[this.state?.currentAssociation?.logo,Validators.required],
        dateCreation:[this.state?.currentAssociation?.dateCreation,Validators.required],

      })
      this.formBuilt=true;
  })

  }



  updated(){
    this.router.navigateByUrl("/association");
  
  }

  onUpdateAssociation(){
    this.submitted=true;
    if (this.associationFormGroup.invalid)
      return;
    this.store.dispatch(updateAssociation({association : this.associationFormGroup.value}))
  }
}
