import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl ='http://localhost/user_api/cart.php';
  
constructor(private http: HttpClient) {

 }

 getCurrentUser(): Observable<any> {
  return this.http.get(`${this.apiUrl}/user`);
}

getUserAddress(): Observable<any> {
  return this.http.get(`${this.apiUrl}/user/address`);
}

updateUserProfile(user: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/user`, user);
}

updateUserAddress(address: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/user/address`, address);
}

}
