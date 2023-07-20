import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AssociationState, AssociationStateEnum } from 'src/app/ngrx/association/association.reducer';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit{
  associationState$?: Observable<AssociationState>;
  readonly AssociationStateEnum = AssociationStateEnum;

  constructor(private store:Store<any>){}

  ngOnInit(): void {
    this.associationState$ = this.store.pipe(
      map((state)=> state.catalogAssociation)
    )
  }

}
