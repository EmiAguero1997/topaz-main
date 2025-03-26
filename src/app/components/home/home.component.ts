import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  token!:string;
  identity:any;
  constructor(private ar:ActivatedRoute, private authSv:AuthService){
    this.ar.queryParams.subscribe(params=>{
      this.token = params['token'];
      let identity = params['identity'];
      identity = atob(identity);
      this.identity = JSON.parse(identity);
      sessionStorage.setItem('token', this.token);
      sessionStorage.setItem('identity', this.identity);
      this.authSv.setIdentity(this.identity);
      console.log('token: ', this.token);
      console.log('identity: ', this.identity);
    })
    
  }
}
