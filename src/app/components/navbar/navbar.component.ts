import { Component, computed, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { AvatarGroupModule } from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, AvatarModule, AvatarGroupModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
    userItems: MenuItem[] | undefined;
    toggle:boolean = false;
    identity:any = computed(()=> this.authSv.identity());

    constructor(private authSv:AuthService){

    }
  
    ngOnInit() {
      console.log(this.identity());
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
        this.userItems = [
          {
            items:[
              {
                label:'Mi cuenta'
              }
            ]
          }
        ]
    }
  
    toggleUserMenu(){
      this.toggle = !this.toggle;
    }
}
