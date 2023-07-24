import { Injectable } from '@angular/core';
import { Membership } from '../models/Membership.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  host: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllMemberships(): Observable<Membership[]> {
    return this.http.get<Membership[]>(this.host + "/memberships");
  }

  getMembership(id: number): Observable<Membership> {
    return this.http.get<Membership>(this.host + "/memberships/" + id);
  }

  updateMembership(membership: Membership): Observable<Membership> {
    return this.http.put<Membership>(this.host + "/memberships/" + membership.id, membership);
  }

  saveMembership(membership: Membership): Observable<Membership> {
    return this.http.post<Membership>(this.host + "/memberships", membership);
  }

  deleteMembership(id: number): Observable<void> {
    return this.http.delete<void>(this.host + "/memberships/" + id);
  }
}
