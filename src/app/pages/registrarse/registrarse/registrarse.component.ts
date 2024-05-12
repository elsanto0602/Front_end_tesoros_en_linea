import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioInterface } from '../../../core/interface/usuario.interface';
import Swal from 'sweetalert2';
import { contrasenaMatch } from './registrarse.custom.validators';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
})
export class RegistrarseComponent {
  @Input() data: any = [];
  @Output() onForm: EventEmitter<any> = new EventEmitter<any>();
  // formGroup = new FormGroup(
  //   {
  //     names: new FormControl(''),
  //   }
  // )
  private readonly _formBuilder = inject(FormBuilder);
  
  newUsuario: UsuarioInterface = {
    name : '',
    email:'',
    telefono: '',
    pais: '',
    clave: '',
    confirmClave:''
  }

  constructor(private _userService:UserService, private router:Router){
    console.log("NOPASANADA")
  }
  
  formGroup = this._formBuilder.nonNullable.group({
    names: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    telefono: ['',Validators.required],
    pais: ['',Validators.required],
    clave: ['',Validators.required],
    confirmClave:['',Validators.required]
  },{validators:contrasenaMatch});

  clickRegister(){
    // console.log(this.formGroup.get("names")?.value as string);
    
    const name = this.namesField.value;
    const email = this.emailField.value;
    const telefono = this.telefonoField.value;
    const pais = this.paisField.value;
    const clave = this.claveField.value;
    const confirmClave = this.confirmClaveField.value;
    
    if(this.formGroup.valid){
      //se crea el objeto usuario
      this.newUsuario = {
        name,
        email,
        telefono,
        pais,
        clave
      };

      this.enviar(this.newUsuario)
      
      console.log('IF----->',this.formGroup.valid);
      //TODO --> CONFIGURAR ENDPOINTS EN BACKEND Y EN FRONT
      //TODO --> DIRECCIONAR AL LOGIN
      console.log(this.newUsuario);
      
      return;
      
    }
    else if(this.emailField.hasError('email')){
      Swal.fire({
        icon: "error",
        title: "Error en el correo",
        text: "Ingrese correctamente el correo",
        confirmButtonColor:"#0d6efd"
      });
      return;
      
    }
    else if(!(!contrasenaMatch)){
      Swal.fire({
        icon: "error",
        title: "Las contraseñas deben coincidir",
        text: "Ingrese correctamente las contraseñas",
        confirmButtonColor:"#0d6efd"
      });
      return
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: "Ingrese todos los campos",
        confirmButtonColor:"#0d6efd"
      });
      return;
    }
    

  }


  enviar(usuario:UsuarioInterface){
    
    try {
      this._userService.signIn(usuario).subscribe(data =>{
        console.log("el usuario fue registrado con existo");
        Swal.fire({
          icon: "success",
          title: `Usuario ${this.newUsuario.name} registrado con éxito`,
          text: "Ingresa a la sesión",
          confirmButtonColor:"#0d6efd"
        });
        this.router.navigate(['/login'])
      })
    } catch (error) {
      console.error(error)
    }

  }

  get namesField():FormControl<string>{
    return this.formGroup.controls.names;
  }
  get emailField():FormControl<string>{
    return this.formGroup.controls.email;
  }
  get telefonoField():FormControl<string>{
    return this.formGroup.controls.telefono;
  }
  get paisField():FormControl<string>{
    return this.formGroup.controls.pais;
  }
  get claveField():FormControl<string>{
    return this.formGroup.controls.clave;
  }
  get confirmClaveField():FormControl<string>{
    return this.formGroup.controls.clave;
  }
}
