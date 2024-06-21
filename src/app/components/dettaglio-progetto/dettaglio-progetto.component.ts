import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Media } from '../../shared/models/project.model';
import { PaginatorPipe } from '../../shared/pipes/paginator.pipe';
import { ItIconComponent, ItPaginationComponent } from 'design-angular-kit';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dettaglio-progetto',
  standalone: true,
  imports: [
    PaginatorPipe,
    ItIconComponent,
    ItPaginationComponent,
    DatePipe
  ],
  templateUrl: './dettaglio-progetto.component.html',
  styleUrl: './dettaglio-progetto.component.scss'
})
export class DettaglioProgettoComponent {
  idProgetto:string = '';
  mediaList: Media[] = [];
  centerCurrentPage = 0;
  pageElements = 5;
  pagesNumber = 1;

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
      }
    )

  }

  goTo(path: string) {
    this.router.navigateByUrl(path);

  }
  rightPageChange(page: number): void {
    this.centerCurrentPage = page;
  }

}
