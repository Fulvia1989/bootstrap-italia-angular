import { Component } from '@angular/core';
import { AutocompleteItem, ItAutocompleteComponent, ItAvatarModule, ItHeaderComponent, ItIconComponent, ItLanguageSwitcherComponent } from 'design-angular-kit';
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
    ItAutocompleteComponent,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoSrc = './assets/researchitaly-logo.png';
  logoMURsrc = './assets/mur_logo_bianco.svg';

  regioni:AutocompleteItem[] = [{value:"Progetti",link:"#"},{value:"Media",link:"#"},{value:"Beneficiari",link:"#"}]

  constructor(
    public userService:UserService
  ){}

  onAutocompleteSelected(e:any){
    console.log(e);
  }

  

}
