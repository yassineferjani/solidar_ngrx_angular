import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from '../models/Association.model';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  host:string = "http://localhost:3000" 
  constructor(private http: HttpClient) { }

  getAllAssociations():Observable<Association[]>{
    return this.http.get<Association[]>(this.host+"/associations");
  }

  getAssociation(id:number):Observable<Association>{
    return this.http.get<Association>(this.host+"associations/"+id);
  }

  updateAssociation(association:Association):Observable<Association>{
    return this.http.put<Association>(this.host+"/associations/"+association.id,association);
  }

  deleteAssociation(id:number):Observable<void>{
    return this.http.delete<void>(this.host+"/associations/"+id);
  }
}
