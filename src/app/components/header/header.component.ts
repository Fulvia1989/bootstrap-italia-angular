import { Component } from '@angular/core';
import { ItAvatarModule, ItHeaderComponent, ItIconComponent, ItLanguageSwitcherComponent } from 'design-angular-kit';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'main-header',
  standalone: true,
  imports: [
    ItHeaderComponent,
    ItIconComponent,
    ItAvatarModule,
    ItLanguageSwitcherComponent,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoSrc = './assets/researchitaly-logo.png';
  logoMURsrc = './assets/mur_logo_bianco.svg';

  constructor(
    public userService:UserService
  ){}

  

}
