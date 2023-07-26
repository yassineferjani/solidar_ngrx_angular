import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getMemberships, newMembership } from 'src/app/ngrx/membership/membership.actions';

@Component({
  selector: 'app-membership-navbar',
  templateUrl: './membership-navbar.component.html',
  styleUrls: ['./membership-navbar.component.css']
})
export class MembershipNavbarComponent implements OnInit{
  constructor(private store: Store<any>, private router: Router){}

  ngOnInit(): void {
  }

  onNewMember(){
    this.router.navigateByUrl("/membership/new");
  }
  onGetAllMembers(){
    this.store.dispatch(getMemberships())
  }
}
