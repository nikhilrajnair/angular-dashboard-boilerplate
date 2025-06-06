import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1, results: number = 20, search: string = ''): Observable<any> {
    let params = new HttpParams().set('page', page).set('results', results);
    if (search) {
      params = params.set('keyword', search);
    }
    return this.http.get<any>(this.apiUrl, { params });
  }
}
