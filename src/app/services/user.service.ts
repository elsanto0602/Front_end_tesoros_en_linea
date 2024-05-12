import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from '../core/interface/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //almacena url del endpoint
  private myAppUrl:string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/'
   }

   signIn(user:UsuarioInterface):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user)
   }
}
