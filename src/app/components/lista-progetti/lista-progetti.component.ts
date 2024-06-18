import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-lista-progetti',
  standalone: true,
  imports: [],
  templateUrl: './lista-progetti.component.html',
  styleUrl: './lista-progetti.component.scss'
})
export class ListaProgettiComponent {

  constructor(
    private userService: UserService
  ){}

  ngOnInit(){
   let userName = this.userService.getUserName();
   console.log(userName);
  }

}
