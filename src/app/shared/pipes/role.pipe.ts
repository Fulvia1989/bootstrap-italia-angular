import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from '../models/user.model';

@Pipe({
  name: 'role',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(role: string): boolean {
    switch(role){
      case(Roles.admin):
        return true
      case(Roles.recip):
        return false
      default:
        return false;
    }

    
  }

}
