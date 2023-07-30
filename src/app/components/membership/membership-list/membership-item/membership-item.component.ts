import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Membership } from 'src/app/models/Membership.model';
import { deleteMembership } from 'src/app/ngrx/membership/membership.actions';

@Component({
  selector: 'app-membership-item',
  templateUrl: './membership-item.component.html',
  styleUrls: ['./membership-item.component.css']
})
export class MembershipItemComponent {
  @Input() membership?:Membership;
 
  constructor(private store:Store<any>, private router:Router){}

  onDelete(membership:Membership){
    this.store.dispatch(deleteMembership({membership}));
  }
  onEdit(membership:Membership){
    this.router.navigateByUrl("/membership/edit/"+membership.id)
  }
}
