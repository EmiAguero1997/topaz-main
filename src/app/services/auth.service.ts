import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthSv: OAuthService) {
    this.configure();
  }

  configure() {
    console.log('Configuring OAuth...');
    this.oauthSv.configure(authCodeFlowConfig);
    this.oauthSv.loadDiscoveryDocumentAndTryLogin();
  }

  isLogged(){
    return this.oauthSv.getIdentityClaims();
  }

  getToken(){
    return this.oauthSv.getAccessToken();
  }
}
