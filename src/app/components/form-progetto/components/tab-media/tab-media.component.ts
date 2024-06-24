import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ItTableComponent, ItIconComponent,ItTooltipDirective, ItPaginationComponent, } from 'design-angular-kit';
import { Modal } from 'bootstrap';
import { Media } from '../../../../shared/models/project.model';
import { PaginatorPipe } from '../../../../shared/pipes/paginator.pipe';


@Component({
  selector: 'tab-media',
  standalone: true,
  imports: [
    ItTableComponent,
    ItIconComponent,
    ItTooltipDirective,
    ItPaginationComponent,
    PaginatorPipe
  ],
  templateUrl: './tab-media.component.html',
  styleUrl: './tab-media.component.scss'
})
export class TabMediaComponent {
  @Input() idProgetto!: string;
  loading = true;
  listaMedia : Media[]=  [];

  changerValues: number[]=[5,10,15,20,25,30];
  changerValue:number = 5;
  centerCurrentPage = 0;
  pagesNumber = 1;

  @ViewChild('eliminaModal') eliminaModal: any;
  mediaToDelete! : Media | null;
  activeModal : any;


  constructor(
    private apiService:ApiService
  ){}

  ngOnInit(): void {
    this.getListaMedia()
  }

  getListaMedia(){
    this.loading= true;
    this.apiService.getListaMedia(this.idProgetto).subscribe(
      res => {
        this.loading= false;
        this.listaMedia = res;
        this.pagesNumber = Math.round(res.length / this.changerValue);
      }
     )
  }

  modaleElimina(media : Media){
    this.mediaToDelete = media;
    this.activeModal=  new Modal(this.eliminaModal.nativeElement);
    this.activeModal.show();
  }

  eliminaMedia(){
    this.activeModal.hide();
    this.listaMedia = this.listaMedia.filter(b => b.id != this.mediaToDelete?.id);
    this.mediaToDelete = null;
    this.activeModal = null;
  }

  preview(media : Media){

  }

  rightPageChange(page: number): void {
    this.centerCurrentPage = page;
  }
  changerEvent(value: number) {
    this.changerValue = value;
    this.pagesNumber = Math.round(this.listaMedia.length / this.changerValue);
    this.centerCurrentPage = 0;
  }
}
