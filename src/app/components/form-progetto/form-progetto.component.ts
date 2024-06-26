import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  ItButtonDirective, ItTabContainerComponent, ItTabItemComponent } from 'design-angular-kit';
import { TabProgrammaComponent } from './components/tab-programma/tab-programma.component';
import { TabBeneficiariComponent } from './components/tab-beneficiari/tab-beneficiari.component';
import { TabMediaComponent } from './components/tab-media/tab-media.component';
@Component({
  selector: 'app-form-progetto',
  standalone: true,
  imports: [
    ItButtonDirective,
    ItTabContainerComponent,
    ItTabItemComponent,
    TabProgrammaComponent,
    TabBeneficiariComponent,
    TabMediaComponent
  ],
  templateUrl: './form-progetto.component.html',
  styleUrl: './form-progetto.component.scss'
})
export class FormProgettoComponent {

  activeTab=0
  idProgetto! : string;
  constructor(
    private router : Router
  ){}

  indietro(){
    this.router.navigateByUrl('/progetti');
  }

  programmaConfermatoEvt(idProgetto : string){
    this.idProgetto = idProgetto;
  }
}
