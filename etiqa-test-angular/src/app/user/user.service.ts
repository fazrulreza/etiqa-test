import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/api/user';

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  getAllUser(): Promise<void | User[]> {
    return this.http
      .get(this.baseUrl)
      .toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }

  createUser(newUser: User): Promise<void | User> {
    return this.http
      .post(this.baseUrl, newUser)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  updateUser(updateUser: User) {
    return this.http
      .put(`${this.baseUrl}/${updateUser.id}`, updateUser)
      .toPromise()
      .then(response => response as String)
      .catch(this.handleError);
  }

  deleteUser(id: Number) {
    return this.http
      .delete(`${this.baseUrl}/${id}`)
      .toPromise()
      .then(response => response as String)
      .catch(this.handleError);
  }

}
