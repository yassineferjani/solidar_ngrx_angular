import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createMembership, newMembership } from 'src/app/ngrx/membership/membership.actions';
import { createPublication } from 'src/app/ngrx/publication/publication.actions';
import { MembershipState } from 'src/app/store/membership/Membership.store';
import { MembershipStateEnum } from 'src/app/store/membership/MembershipStore.enum';

@Component({
  selector: 'app-membership-new',
  templateUrl: './membership-new.component.html',
  styleUrls: ['./membership-new.component.css']
})
export class MembershipNewComponent implements OnInit {

  memberFormGroup?: FormGroup;
  state?: MembershipState;
  readonly MembershipStateEnum = MembershipStateEnum;
  submitted: Boolean = false;

  constructor(private store: Store<any>, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.store.dispatch(newMembership());
    this.store.subscribe((state) => {
      this.state = state.catalogMembership;
      if (this.state?.dataState == MembershipStateEnum.NEW) {
        this.memberFormGroup = this.fb.group({
          firstname: ["", Validators.required],
          lastname: ["", Validators.required],
          cin: [, Validators.compose([Validators.minLength(8), Validators.maxLength(8), Validators.required])],
          birthDate: ["", Validators.required],
          type: ["", Validators.required],
        });
      }
    });

  }


  newMember() {
    this.store.dispatch(newMembership())
  }
  onSaveMember() {
    this.submitted = true;
    if (this.memberFormGroup?.invalid)
      return;
    this.store.dispatch(createMembership({ membership: this.memberFormGroup?.value }))
  }

}
