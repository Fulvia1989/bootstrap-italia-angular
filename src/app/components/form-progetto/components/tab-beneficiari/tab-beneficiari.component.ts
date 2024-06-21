import { Component, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Beneficiari } from '../../../../shared/models/project.model';
import { ItTableComponent, ItIconComponent,ItTooltipDirective } from 'design-angular-kit';
import { Modal } from 'bootstrap';


@Component({
  selector: 'tab-beneficiari',
  standalone: true,
  imports: [
    ItTableComponent,
    ItIconComponent,
    ItTooltipDirective
  ],
  templateUrl: './tab-beneficiari.component.html',
  styleUrl: './tab-beneficiari.component.scss'
})
export class TabBeneficiariComponent {
  @Input() idProgetto!: string;
  beneficiari : Beneficiari[]=  [];
  loading = true;

  @ViewChild('eliminaModal') eliminaModal: any;
  beneficiarioToDelete! : Beneficiari | null;
  activeModal : any;

  constructor(
    private apiService:ApiService
  ){}

  ngOnInit(): void {
    this.getBeneficiari()
  }

  getBeneficiari(){
    this.loading= true;
    this.apiService.getBeneficiari(this.idProgetto).subscribe(
      res => {
        this.loading= false;
        this.beneficiari = res;
      }
     )
  }

  modaleElimina(beneficiario : Beneficiari){
    this.beneficiarioToDelete = beneficiario;
    this.activeModal=  new Modal(this.eliminaModal.nativeElement);
    this.activeModal.show();
  }

  eliminaBeneficiario(){
    this.activeModal.hide();
    this.beneficiari = this.beneficiari.filter(b => b.id != this.beneficiarioToDelete?.id);
    this.beneficiarioToDelete = null;
    this.activeModal = null;
  }


}
