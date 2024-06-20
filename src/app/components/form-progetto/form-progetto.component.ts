import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  ItButtonDirective, ItTabContainerComponent, ItTabItemComponent } from 'design-angular-kit';
import { TabProgrammaComponent } from './components/tab-programma/tab-programma.component';
@Component({
  selector: 'app-form-progetto',
  standalone: true,
  imports: [
    ItButtonDirective,
    ItTabContainerComponent,
    ItTabItemComponent,
    TabProgrammaComponent
  ],
  templateUrl: './form-progetto.component.html',
  styleUrl: './form-progetto.component.scss'
})
export class FormProgettoComponent {

  activeTab=0
  programmaConfermato = false;
  constructor(
    private router : Router
  ){}

  indietro(){
    this.router.navigateByUrl('/progetti');
  }

  programmaConfermatoEvt(){
    this.programmaConfermato = true;
  }
}
