import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  identity = signal<any>(null);

  constructor() { }

  setIdentity(identity:any){
    this.identity.set(identity);
  }
}
