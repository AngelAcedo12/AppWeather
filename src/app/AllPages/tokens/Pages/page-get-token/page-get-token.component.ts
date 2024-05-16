import { Component } from '@angular/core';
import { OauthService } from 'services/oauth.service';
import { TokenService } from 'services/token.service';

@Component({
  selector: 'app-page-get-token',
  templateUrl: './page-get-token.component.html',
  styleUrl: './page-get-token.component.css'
})
export class PageGetTokenComponent {

  constructor(private tokenService: TokenService, private oauthService: OauthService) { }
  isLoading = false;
  getTokenUser() {
    this.isLoading = true;
    this.tokenService.getTokenUser().subscribe(
      (res) => {
        this.isLoading = false;
        sessionStorage.setItem('token', res.result.token);
      }
    )
    this.oauthService.saveUserSave()
  }
  getTokenAdmin() {
    this.isLoading = true;
    this.tokenService.getTokenAdmin().subscribe(
      (res) => {
        this.isLoading = false;
        sessionStorage.setItem('token', res.result.token);
      }
    )
    this.oauthService.saveUserSave()
  }
  
}
