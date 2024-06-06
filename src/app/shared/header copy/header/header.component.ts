import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../../core/interface/menu.interface';
import { MenuRoutes } from '../../../menu/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  login:boolean = false;
  menuItems : MenuInterface[] = [];
  ngOnInit(): void {
      this.menuItems = MenuRoutes;
  }
  
}
