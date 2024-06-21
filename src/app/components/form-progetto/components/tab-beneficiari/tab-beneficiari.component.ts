import { Component, Input } from '@angular/core';
import { ItTableComponent } from 'design-angular-kit';
import { ApiService } from '../../../../services/api.service';
import { Beneficiari } from '../../../../shared/models/project.model';
import { ItIconComponent } from 'design-angular-kit';

@Component({
  selector: 'tab-beneficiari',
  standalone: true,
  imports: [
    ItTableComponent,
    ItIconComponent
  ],
  templateUrl: './tab-beneficiari.component.html',
  styleUrl: './tab-beneficiari.component.scss'
})
export class TabBeneficiariComponent {
  @Input() idProgetto!: string;
  beneficiari : Beneficiari[]=  [];
  loading = true;
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

  eliminaBeneficiario(id : string){
      this.beneficiari = this.beneficiari.filter(b => b.id != id);
  }


}
