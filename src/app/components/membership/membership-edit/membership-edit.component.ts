import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {ActivatedRoute, Router } from'@angular/router'
import { MembershipState } from 'src/app/store/membership/Membership.store';
import { MembershipStateEnum } from 'src/app/store/membership/MembershipStore.enum';
import { editMembership, updateMembership } from 'src/app/ngrx/membership/membership.actions';

@Component({
  selector: 'app-membership-edit',
  templateUrl: './membership-edit.component.html',
  styleUrls: ['./membership-edit.component.css']
})
export class MembershipEditComponent implements OnInit {
  memberFormGroup?:FormGroup;
  memberId:number;
  state?:MembershipState;
  submitted:Boolean = false;
  readonly MembershipStateEnum = MembershipStateEnum;

  constructor(private activatedRoute: ActivatedRoute , private store:Store<any>, 
    private fb:FormBuilder, private router :Router ){
    this.memberId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(editMembership({id : this.memberId}))
    this.store.subscribe((state)=>{
      this.state = state.catalogMembership;
      this.memberFormGroup= this.fb.group({
        id:[this.state?.currentMembership?.id],
        firstname:[this.state?.currentMembership?.firstname,Validators.required],
        lastname:[this.state?.currentMembership?.lastname,Validators.required],
        birthDate:[this.state?.currentMembership?.birthDate,Validators.required],
        type:[this.state?.currentMembership?.type,Validators.required],
        cin:[this.state?.currentMembership?.cin,Validators.required],

      });
    })

  }

  updated(){
    this.router.navigateByUrl("/membership")
  }
  onUpdateMember(){
    this.submitted = true;
    if (this.memberFormGroup?.invalid)
      return;
    this.store.dispatch(updateMembership({membership : this.memberFormGroup?.value}))
  }

}
