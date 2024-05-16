import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubastaInterface } from '../core/interface/subasta.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {

  private myAppUrl:string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api'
   }

   crearSubasta(subasta:SubastaInterface):Observable<any>{
    console.log("entre al signin");
    
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/auctions`,subasta)
   }
}
