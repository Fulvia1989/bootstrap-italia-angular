import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ItButtonDirective, ItCheckboxComponent, ItIconComponent, ItPaginationComponent, ItTooltipDirective } from 'design-angular-kit';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { RoleDirective } from '../../shared/directives/role.directive';
import { RolePipe } from '../../shared/pipes/role.pipe';
import { Progetto } from '../../shared/models/project.model';
import { PaginatorPipe } from '../../shared/pipes/paginator.pipe';
import { Modal } from 'bootstrap-italia';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista-progetti',
  standalone: true,
  imports: [
    ItIconComponent,
    ItPaginationComponent,
    CurrencyPipe,
    RoleDirective,
    RolePipe,
    PaginatorPipe,
    ItCheckboxComponent,
    FormsModule,
    ItTooltipDirective
  ],
  templateUrl: './lista-progetti.component.html',
  styleUrl: './lista-progetti.component.scss'
})
export class ListaProgettiComponent {
changerValues: number[]=[5,10,15,20,25,30];
changerValue:number = 10;

  progetti: Progetto[] = [];
  
  userRole:string = '';
  centerCurrentPage = 0;
  pagesNumber = 1;
  accettazione:boolean=false;

  infoBoxTxt = `Ministero dell'università e della ricerca <br> 
  Segretario Generale <br> Direzione Generale della Ricerca <br> Ufficio I`;
  hasAccepted: boolean = false;
  
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
     
        this.pagesNumber = Math.round(res.length / this.changerValue);
      }
    )
  }

  scaricaFile(type: 'informativa' | 'scheda') {
    switch(type){
      case 'informativa':
        let link = document.createElement('a');
        link.setAttribute('type', 'hidden');
        link.href = '/assets/docs/informativa_privacy.pdf';
        link.download = 'informativa_privacy.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
        break;
      case 'scheda':
        break;

    }
  }

  confermaAccettazione(){
    this.hasAccepted = true;
  }
  goTo(path:string,id?:number){
    id ? path = `${path}/${id}` : null;
    this.router.navigateByUrl(path);

  }

    

  rightPageChange(page: number): void {
    this.centerCurrentPage = page;
  }
  changerEvent(value: number) {
    this.changerValue = value;
    this.pagesNumber = Math.round(this.progetti.length / this.changerValue);
    this.centerCurrentPage = 0;
  }


}
