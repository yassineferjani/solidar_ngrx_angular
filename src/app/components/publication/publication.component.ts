import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { PublicationState } from 'src/app/store/publication/Publication.store';
import { PublicationStateEnum } from 'src/app/store/publication/PublicationStore.enum';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  publicationState$?: Observable<PublicationState>;
  readonly PublicationStateEnum = PublicationStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.publicationState$ = this.store.pipe(
      map((state) => state.catalogPublication)
    )
  }
}
