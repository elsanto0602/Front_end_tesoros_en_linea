import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MenuInterface } from '../../../core/interface/menu.interface';
import { MenuRoutes } from '../../../menu/menu';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioInterface } from '../../../core/interface/usuario.interface';
import { UserService } from '../../../services/user.service';
//import { VerUsuariosComponent } from '../../ver-usuarios/ver-usuarios.component';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly _formBuilder = inject(FormBuilder);
  cargando: boolean = false;
  confirmarUsuario: UsuarioInterface = {
   
    email: '',
    clave: '',
  };

  constructor(private _userService: UserService, private router: Router,
    private _errorService: ErrorService) {
    console.log('NOPASANADA');
  }

  formGroup = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    clave: ['', Validators.required],
  });

  ingresar() {
    const email = this.emailField.value;
    const clave = this.claveField.value;

    if (this.formGroup.valid) {
      this.confirmarUsuario = {
        email,
        clave
      }
      this.cargando = true;
      this._userService.login(this.confirmarUsuario).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/login/crear_subasta'])
          this.cargando = false;
          Swal.fire({
            icon: 'success',
            title: `Bienvenid@ de nuevo!`,
            text: '',
            confirmButtonColor: '#0d6efd',
          });
        },
        error:(e:HttpErrorResponse)=>{
          this.cargando = false;
          this._errorService.msjError(e);
        }
      })
    } else if (this.emailField.hasError('email')) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el correo',
        text: 'Ingrese correctamente el correo',
        confirmButtonColor: '#0d6efd',
      });
      return;
    } else {
      Swal.fire({
        icon: 'error',
        title: `Todos los campos son obligatorios `,
        text: 'Ingrese todos los campos',
        confirmButtonColor: '#0d6efd',
      });
      return;
    }
  }
  get emailField(): FormControl<string> {
    return this.formGroup.controls.email;
  }
  get claveField(): FormControl<string> {
    return this.formGroup.controls.clave;
  }
}
