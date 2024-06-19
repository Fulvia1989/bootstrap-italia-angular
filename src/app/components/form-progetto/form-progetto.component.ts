import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  ItBackButtonComponent, ItButtonDirective, ItTabContainerComponent, ItTabItemComponent } from 'design-angular-kit';
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
  constructor(
    private router : Router
  ){}

  conferma(){

  }

  indietro(){
    this.router.navigateByUrl('/progetti');

  }
}
