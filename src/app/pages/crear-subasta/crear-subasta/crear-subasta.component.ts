import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-subasta',
  standalone: true,
  imports: [],
  templateUrl: './crear-subasta.component.html',
  styleUrl: './crear-subasta.component.css'
})
export class CrearSubastaComponent {

  imageUrl: string | ArrayBuffer | null = null;
  

  mostrarImagen(event:any){
    let archivo = event.target.files[0];
    let vistaPrevia = document.getElementById("vista-previa");
    
    if(archivo){
      let lector = new FileReader();
      lector.readAsDataURL(archivo);
      lector.onload = () =>{
        this.imageUrl = lector.result as string;
      }
    }


    
  }

  
}
