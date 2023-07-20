import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Association } from 'src/app/models/Association.model';
import { DeleteAssociationAction } from 'src/app/ngrx/association/association.actions';

@Component({
  selector: 'app-association-item',
  templateUrl: './association-item.component.html',
  styleUrls: ['./association-item.component.css']
})
export class AssociationItemComponent {
  @Input() association?:Association;
 
  constructor(private store:Store<any>, private router:Router){}

  onDelete(association:Association){
    this.store.dispatch(new DeleteAssociationAction(association));
  }
  onEdit(association:Association){
    this.router.navigateByUrl("/association/edit/"+association.id)
  }
}
