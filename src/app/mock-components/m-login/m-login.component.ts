import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItCardComponent, ItIconComponent } from 'design-angular-kit';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'm-login',
  standalone: true,
  imports: [ItCardComponent,ItIconComponent],
  templateUrl: './m-login.component.html',
  styleUrl: './m-login.component.scss'
})
export class MLoginComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ){}

  goTo(e:Event,role:string){
    e.preventDefault();
    let user = {
      nome: 'Test',
      cognome: role,
      ruoli:[role],
      id: this.userService.random()
    };
    console.log(user)
    this.userService.setUser(user);
    this.router.navigateByUrl('/progetti');

  }

}
