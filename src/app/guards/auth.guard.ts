import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../services/auth.config';

export const authGuard: CanActivateFn = (route, state) => {
  const oauthSv = inject(OAuthService);
  oauthSv.configure(authCodeFlowConfig);
  oauthSv.loadDiscoveryDocumentAndTryLogin();
  console.log('token: ', oauthSv.getAccessToken());
  console.log('identity: ', oauthSv.getIdentityClaims());
  if(oauthSv.getIdentityClaims()){
    console.log('AUTHORIZED');
    return true;
  } else{
    console.log('UNAUTHORIZED');
    return false;
  }
};
