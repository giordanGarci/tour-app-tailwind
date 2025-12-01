import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile : Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthGoogleService
  ) {}

  browse(){
    this.router.navigate(['/paginas/galeria']);
  }

  loginGoogle() {
    this.loginService.login();
  }

  isLogged() : boolean {
    const googleData = this.loginService.getLoggedProfile();
    console.log(googleData);
    this.profile = googleData;
    return !!this.profile;
  }

}
