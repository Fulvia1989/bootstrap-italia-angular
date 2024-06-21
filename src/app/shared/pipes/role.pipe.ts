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
        return false
      case(Roles.recip):
        return true
      default:
        return true;
    }

    
  }

}
