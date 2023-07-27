import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Publication } from 'src/app/models/Publication.model';
import { deletePublication } from 'src/app/ngrx/publication/publication.actions';

@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css']
})
export class PublicationItemComponent {
  @Input() publication?:Publication

  constructor(private store:Store<any>, private router:Router){}

  onDelete(publication :Publication){
    this.store.dispatch(deletePublication({publication}))
  }
  onEdit(publication:Publication){
    this.router.navigateByUrl("/publication/edit/"+publication.id)
  }

}
