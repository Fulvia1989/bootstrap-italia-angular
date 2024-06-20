import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ItButtonDirective, ItIconComponent } from 'design-angular-kit';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { RoleDirective } from '../../shared/directives/role.directive';
import { RolePipe } from '../../shared/pipes/role.pipe';

@Component({
  selector: 'app-lista-progetti',
  standalone: true,
  imports: [ItIconComponent,CurrencyPipe,RoleDirective,RolePipe],
  templateUrl: './lista-progetti.component.html',
  styleUrl: './lista-progetti.component.scss'
})
export class ListaProgettiComponent {
  progetti: {id:number,programma:string,fondo:string,codice:string,area:string,output:string,finanziamento:number,beneficiari:any[]}[] = [];
  userRole:string = '';
  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router : Router
  ){}

  ngOnInit(){
   let userRoles = this.userService.getUserRoles();
   this.userRole = userRoles[0];

   this.apiService.getProgetti().subscribe(
    res => {
      this.progetti =res;
    }
   )
  }

  aggiungiProgetto(){
    this.router.navigateByUrl('/form-progetto');
  }

}
