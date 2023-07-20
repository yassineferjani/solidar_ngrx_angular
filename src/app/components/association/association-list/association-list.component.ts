import { Component,Input } from '@angular/core';
import { AssociationState } from 'src/app/ngrx/association/association.reducer';

@Component({
  selector: 'app-association-list',
  templateUrl: './association-list.component.html',
  styleUrls: ['./association-list.component.css']
})
export class AssociationListComponent {
  @Input() state?:AssociationState;
}