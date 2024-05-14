import { Component, inject, OnInit } from '@angular/core';
import { RegistrarseComponent } from '../registrarse/registrarse/registrarse.component';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css',
})
export class VerUsuariosComponent{
  // private readonly _usuariosApi = inject(RegistrarseComponent)
  // ngOnInit(): void {

  // }
  constructor(){
    console.log("VER USUARIOS IN DA HOUSE");

  }
  
  
  
}
