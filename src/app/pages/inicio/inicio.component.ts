import { Component } from '@angular/core';
import { CardsSubastasComponent } from '../../components/cards-subastas/cards-subastas.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CardsSubastasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
