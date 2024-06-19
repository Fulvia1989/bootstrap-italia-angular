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

  regioni:AutocompleteItem[] = [{value:"Abruzzo",link:"#"},{value:"Basilicata",link:"#"},{value:"Calabria",link:"#"},{value:"Campania",link:"#"},{value:"Emilia Romagna",link:"#"},{value:"Friuli Venezia Giulia",link:"#"},{value:"Lazio",link:"#"},{value:"Liguria",link:"#"},{value:"Lombardia",link:"#"},{value:"Marche",link:"#"},{value:"Molise",link:"#"},{value:"Piemonte",link:"#"},{value:"Puglia",link:"#"},{value:"Sardegna",link:"#"},{value:"Sicilia",link:"#"},{value:"Toscana",link:"#"},{value:"Trentino Alto Adige",link:"#"},{value:"Umbria",link:"#"},{value:"Valle d’Aosta",link:"#"},{value:"Veneto",link:"#"}]

  constructor(
    public userService:UserService
  ){}

  onAutocompleteSelected(e:any){
    console.log(e);
  }

  

}
