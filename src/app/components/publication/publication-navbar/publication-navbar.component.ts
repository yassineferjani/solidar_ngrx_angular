import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPublications } from 'src/app/ngrx/publication/publication.actions';

@Component({
  selector: 'app-publication-navbar',
  templateUrl: './publication-navbar.component.html',
  styleUrls: ['./publication-navbar.component.css']
})
export class PublicationNavbarComponent implements OnInit{
  constructor(private router:Router, private store:Store<any>){}
  ngOnInit(): void {
  }


  onNewPub(){
    this.router.navigateByUrl("/publication/new")
  }
  onGetAllPubs(){
    this.store.dispatch(getPublications())
  }

}
