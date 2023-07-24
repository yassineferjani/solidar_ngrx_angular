import { Component, Input } from '@angular/core';
import { MembershipState } from 'src/app/store/membership/Membership.store';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css']
})
export class MembershipListComponent {
@Input() state?:MembershipState;
}
