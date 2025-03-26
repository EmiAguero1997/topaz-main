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
  identity:any;
  constructor(private ar:ActivatedRoute){
    this.ar.queryParams.subscribe(params=>{
      this.token = params['token'];
      let identity = params['identity'];
      this.identity = JSON.parse(identity);
      sessionStorage.setItem('token', this.token);
      sessionStorage.setItem('identity', this.identity);
      console.log('token: ', this.token);
      console.log('identity: ', this.identity);
    })
    
  }
}
