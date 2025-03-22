import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { AvatarGroupModule } from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, AvatarModule, AvatarGroupModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'topaz-main';
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Areas',
              
          },
          {
              label: 'Locaciones',
            
          },
          {
            label: 'Proveedores',
           
        },
        {
            label: 'Pedidos',
            
        },
        {
            label: 'Ordenes de compra',
            
        },
      ];
  }
}
