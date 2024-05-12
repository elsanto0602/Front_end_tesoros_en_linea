import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioInterface } from '../../../core/interface/usuario.interface';

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
    clave: ''
  }
  
  // name : string = '';
  // email : string = '';
  // telefono : string = '';
  // pais : string = '';
 
  formGroup = this._formBuilder.nonNullable.group({
    names: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    telefono: ['',Validators.required],
    pais: ['',Validators.required],
    clave: ['',Validators.required],
  });

  clickRegister() : boolean{
    // console.log(this.formGroup.get("names")?.value as string);
    let estado : boolean = false;
    const name = this.namesField.value;
    const email = this.emailField.value;
    const telefono = this.telefonoField.value;
    const pais = this.paisField.value;
    const clave = this.claveField.value;
    
    if(this.formGroup.valid){
      this.newUsuario = {
        name,
        email,
        telefono,
        pais,
        clave,
      };
      
      console.log('IF----->',this.formGroup.valid);
      
      console.log(this.newUsuario);
      return estado;
      
    }
    else{
      
      return estado;
      
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
}
