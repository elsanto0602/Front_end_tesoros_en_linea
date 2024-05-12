import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../../core/interface/menu.interface';
import { MenuRoutes } from '../../../menu/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  

  ngOnInit(): void {
      
  }
}
