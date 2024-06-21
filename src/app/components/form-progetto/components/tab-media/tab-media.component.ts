import { Component, Input } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'tab-media',
  standalone: true,
  imports: [],
  templateUrl: './tab-media.component.html',
  styleUrl: './tab-media.component.scss'
})
export class TabMediaComponent {
  @Input() idProgetto!: string;
  loading = true;
  listaMedia : any[]=  [];


  constructor(
    private apiService:ApiService
  ){}

  ngOnInit(): void {
    this.getListaMedia()
  }

  getListaMedia(){
    this.loading= true;
    // this.apiService.getListaMedia(this.idProgetto).subscribe(
    //   res => {
    //     this.loading= false;
    //     this.listaMedia = res;
    //   }
    //  )
  }
}
