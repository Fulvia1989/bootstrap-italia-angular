import { Pipe, PipeTransform } from '@angular/core';
import { Progetto } from '../models/project.model';

@Pipe({
  name: 'paginator',
  standalone: true
})
export class PaginatorPipe implements PipeTransform {

  transform(array: any[], centerCurrentPage:number, pageElements:number): any[] {
    let fromIndex = centerCurrentPage ? (centerCurrentPage )*pageElements : 0;
    let toIndex = (fromIndex + pageElements);
    return array.slice(fromIndex,toIndex);
  }

}
