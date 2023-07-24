import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { MembershipState } from 'src/app/store/membership/Membership.store';
import { MembershipStateEnum } from 'src/app/store/membership/MembershipStore.enum';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
  membershipState$?: Observable<MembershipState>;
  readonly MembershipStateEnum = MembershipStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.membershipState$ = this.store.pipe(
      map((state) => state.catalogMembership)
    )
  }
}
