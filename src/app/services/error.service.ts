import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }


  msjError(e:HttpErrorResponse){
    if (e.error.msg) {
      Swal.fire({
        icon: 'error',
        title: `${e.error.msg}`,
        text: 'Intenta de nuevo',
        confirmButtonColor: '#0d6efd',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: `No fue posible ${e.message}`,
        text: 'Intenta de nuevo',
        confirmButtonColor: '#0d6efd',
      });
    }
  }
}
