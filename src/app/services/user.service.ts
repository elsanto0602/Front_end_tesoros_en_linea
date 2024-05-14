import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
    this.myApiUrl = 'api/users'
   }

   signIn(user:UsuarioInterface):Observable<any>{
    console.log("entre al signin");
    
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user)
   }

   login(user:UsuarioInterface):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user)
   }
}
