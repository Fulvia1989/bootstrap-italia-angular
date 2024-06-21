import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ItTableComponent, ItIconComponent,ItTooltipDirective } from 'design-angular-kit';
import { Modal } from 'bootstrap';
import { Media } from '../../../../shared/models/project.model';


@Component({
  selector: 'tab-media',
  standalone: true,
  imports: [
    ItTableComponent,
    ItIconComponent,
    ItTooltipDirective
  ],
  templateUrl: './tab-media.component.html',
  styleUrl: './tab-media.component.scss'
})
export class TabMediaComponent {
  @Input() idProgetto!: string;
  loading = true;
  listaMedia : Media[]=  [];

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
}
