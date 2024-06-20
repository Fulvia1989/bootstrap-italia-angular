import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ItButtonDirective, ItIconComponent, ItPaginationComponent } from 'design-angular-kit';
import { ApiService } from '../../services/api.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { RoleDirective } from '../../shared/directives/role.directive';
import { RolePipe } from '../../shared/pipes/role.pipe';
import { Progetto } from '../../shared/models/project.model';
import { PaginatorPipe } from '../../shared/pipes/paginator.pipe';

@Component({
  selector: 'app-lista-progetti',
  standalone: true,
  imports: [
    ItIconComponent,
    ItPaginationComponent,
    CurrencyPipe,
    RoleDirective,
    RolePipe,
    PaginatorPipe
  ],
  templateUrl: './lista-progetti.component.html',
  styleUrl: './lista-progetti.component.scss'
})
export class ListaProgettiComponent {
  progetti: Progetto[] = [];
  
  userRole:string = '';
  centerCurrentPage = 0;
  pageElements = 5;
  pagesNumber = 1;

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
      this.pagesNumber = res.length % this.pageElements;
    }
   )
  }

  aggiungiProgetto(){
    this.router.navigateByUrl('/form-progetto');
  }

  

  rightPageChange(page: number): void {
    this.centerCurrentPage = page;
  }

}
