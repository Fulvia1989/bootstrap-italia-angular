import { Component } from '@angular/core';
import { ItTableComponent } from 'design-angular-kit';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'tab-beneficiari',
  standalone: true,
  imports: [
    ItTableComponent
  ],
  templateUrl: './tab-beneficiari.component.html',
  styleUrl: './tab-beneficiari.component.scss'
})
export class TabBeneficiariComponent {

  constructor(
    private apiService:ApiService
  ){}

  ngOnInit(): void {
    this.getBeneficiari()
  }

  getBeneficiari(){

  }


}
