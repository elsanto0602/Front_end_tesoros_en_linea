import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SubastaService } from '../../services/subasta.service';

@Component({
  selector: 'app-ver-subasta',
  standalone: true,
  imports: [],
  templateUrl: './ver-subasta.component.html',
  styleUrl: './ver-subasta.component.css'
})
export class VerSubastaComponent implements OnChanges, OnInit{
  @Input() data :any [] =[]
  
  subastaService = inject(SubastaService);
  
  // mostrarImagen(data) {
    
  //   if (this.archivo) {
  //     let lector = new FileReader();
  //     lector.readAsDataURL(this.archivo);
  //     console.log(lector);
      
  //     lector.onload = () => {
  //       this.imageUrl = lector.result as string;
  //     };
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'] && changes['data'].currentValue){
      this.data = changes['data'].currentValue;
    }
  }
  ngOnInit(): void {
    this.subastaService.getSubastas().subscribe((resp:any)=>{
      this.data = resp;
      console.log('Usuarios de mi api ',this.data);
      
    })
  }

}
