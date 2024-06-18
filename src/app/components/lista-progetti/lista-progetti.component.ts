import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ItIconComponent } from 'design-angular-kit';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-lista-progetti',
  standalone: true,
  imports: [ItIconComponent,CurrencyPipe],
  templateUrl: './lista-progetti.component.html',
  styleUrl: './lista-progetti.component.scss'
})
export class ListaProgettiComponent {
  progetti: {id:number,programma:string,fondo:string,codice:string,area:string,output:string,finanziamento:number,beneficiari:any[]}[] = [];

  constructor(
    private userService: UserService,
    private apiService: ApiService
  ){}

  ngOnInit(){
   let userName = this.userService.getUserName();
   console.log(userName);

   this.apiService.getProgetti().subscribe(
    res => {
      this.progetti =res;
    }
   )
  }

}
