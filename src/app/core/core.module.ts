import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("173336893473594")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("881930825287-20boi6619j24rmpal4aifb1h71g5ctcm.apps.googleusercontent.com")
    },
  ]);
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports :[
    RouterModule,
    HeaderComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class CoreModule { }
