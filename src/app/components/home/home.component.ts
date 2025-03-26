import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  token!:string;
  constructor(private ar:ActivatedRoute){
    this.ar.queryParams.subscribe(params=>{
      this.token = params['token'];
      sessionStorage.setItem('token', this.token);
      console.log('token: ', this.token);
    })
    
  }
}
