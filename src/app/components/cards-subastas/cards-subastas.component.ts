import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SubastaService } from '../../services/subasta.service';

@Component({
  selector: 'app-cards-subastas',
  standalone: true,
  imports: [],
  templateUrl: './cards-subastas.component.html',
  styleUrl: './cards-subastas.component.css'
})
export class CardsSubastasComponent implements OnInit, OnChanges {

  @Input() data :any [] =[]

  subastaService = inject(SubastaService);
  

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
