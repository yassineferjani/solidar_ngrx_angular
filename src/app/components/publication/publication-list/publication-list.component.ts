import { Component, Input } from '@angular/core';
import { PublicationState } from 'src/app/store/publication/Publication.store';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent {
  @Input() state?: PublicationState;

}
