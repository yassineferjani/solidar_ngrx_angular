import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AssociationState } from 'src/app/store/association/Association.store';
import { AssociationStateEnum } from 'src/app/store/association/AssociationStore.enum';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  associationState$?: Observable<AssociationState>;
  readonly AssociationStateEnum = AssociationStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.associationState$ = this.store.pipe(
      map((state) => state.catalogAssociation)
    )
  }

}
