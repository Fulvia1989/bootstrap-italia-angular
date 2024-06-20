import { Pipe, PipeTransform } from '@angular/core';
import { Progetto } from '../models/project.model';

@Pipe({
  name: 'paginator',
  standalone: true
})
export class PaginatorPipe implements PipeTransform {

  transform(array: Progetto[], centerCurrentPage:number, pageElements:number): Progetto[] {
    let fromIndex = centerCurrentPage ? (centerCurrentPage )*pageElements : 0;
    let toIndex = (fromIndex + pageElements);
    return array.slice(fromIndex,toIndex);
  }

}
