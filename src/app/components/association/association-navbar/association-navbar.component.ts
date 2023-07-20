import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAssociation } from 'src/app/ngrx/association/association.actions';

@Component({
  selector: 'app-association-navbar',
  templateUrl: './association-navbar.component.html',
  styleUrls: ['./association-navbar.component.css']
})
export class AssociationNavbarComponent implements OnInit{
  constructor(private store:Store<any>){}
  ngOnInit(): void {
  }
  
  onGetAllAssociations(){
    this.store.dispatch(new GetAllAssociation({}))
  }
}
