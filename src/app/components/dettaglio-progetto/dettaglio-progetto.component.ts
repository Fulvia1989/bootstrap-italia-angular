import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Media } from '../../shared/models/project.model';
import { PaginatorPipe } from '../../shared/pipes/paginator.pipe';
import { ItIconComponent, ItPaginationComponent, ItTooltipDirective } from 'design-angular-kit';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dettaglio-progetto',
  standalone: true,
  imports: [
    PaginatorPipe,
    ItIconComponent,
    ItPaginationComponent,
    DatePipe,
    ItTooltipDirective
  ],
  templateUrl: './dettaglio-progetto.component.html',
  styleUrl: './dettaglio-progetto.component.scss'
})
export class DettaglioProgettoComponent {
  idProgetto:string = '';
  mediaList: Media[] = [];
  changerValues: number[]=[5,10,15,20,25,30];

  centerCurrentPage = 0;
  pageElements = 5;
  pagesNumber = 1;
  changerValue: number = 5;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private apiService: ApiService

  ){}

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('idProgetto');
    this.idProgetto = id ? id : '';
    console.log(id);
    this.apiService.getProgetti(this.idProgetto).subscribe(
      res=> {
        res? this.mediaList = res.media : [];
        this.pagesNumber = Math.round(this.mediaList.length / this.changerValue);
      }
    )

  }

  goTo(path: string) {
    this.router.navigateByUrl(path);

  }
  rightPageChange(page: number): void {
    this.centerCurrentPage = page;
  }
  changerEvent(value: number) {
    this.changerValue = value;
    this.pagesNumber = Math.round(this.mediaList.length / this.changerValue);
    this.centerCurrentPage = 0;
  }
  anteprima(e:Event){
    e.preventDefault();

  }

}
