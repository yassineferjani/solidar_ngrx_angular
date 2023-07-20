import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllAssociation } from 'src/app/ngrx/association/association.actions';

@Component({
  selector: 'app-association-navbar',
  templateUrl: './association-navbar.component.html',
  styleUrls: ['./association-navbar.component.css']
})
export class AssociationNavbarComponent implements OnInit{
  constructor(private store:Store<any>, private router:Router){}
  ngOnInit(): void {
  }
  
  onGetAllAssociations(){
    this.store.dispatch(new GetAllAssociation({}));
  }

  onNewAssociation(){
    this.router.navigateByUrl("/association/new");
  }
}
