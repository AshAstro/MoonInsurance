import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUser } from '../loginUser'; // Import loginUser class
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  loginUser(user: loginUser): Observable<loginUser> {
    return this.http.post<loginUser>(`${this.apiUrl}/customer/loginusr`, user); // Pass user object
  }
}
