import { Injectable } from '@angular/core';
import { Publication } from '../models/Publication.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  host: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.host + "/publications");
  }

  getPublication(id: number): Observable<Publication> {
    return this.http.get<Publication>(this.host + "/publications/" + id);
  }

  updatePublication(pub: Publication): Observable<Publication> {
    return this.http.put<Publication>(this.host + "/publications/" + pub.id, pub);
  }

  savePublication(pub: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.host + "/publications", pub);
  }

  deletePublication(id: number): Observable<void> {
    return this.http.delete<void>(this.host + "/publications/" + id);
  }
}
