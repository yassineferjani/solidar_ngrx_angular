import { Component,Input } from '@angular/core';
import { Association } from 'src/app/models/Association.model';

@Component({
  selector: 'app-association-item',
  templateUrl: './association-item.component.html',
  styleUrls: ['./association-item.component.css']
})
export class AssociationItemComponent {
  @Input() association?:Association;
}
