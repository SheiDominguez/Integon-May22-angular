import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private singInEndPoint = 'http://localhost:3005/signIn';
  private singUpEndPoint = 'http://localhost:3005/signUp';
  constructor(private http : HttpClient) { }


  SignIn(user: IUser) : Observable<IUser[]> {
    return this.http.post<IUser[]>(this.singInEndPoint, user);
  }

  SignUp(user: IUser) : Observable<IUser[]> {
    return this.http.post<IUser[]>(this.singUpEndPoint, user);
  }
}

