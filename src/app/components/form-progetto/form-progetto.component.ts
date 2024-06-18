import { Component } from '@angular/core';
import {  ItBackButtonComponent, ItButtonDirective, ItTabContainerComponent, ItTabItemComponent } from 'design-angular-kit';

@Component({
  selector: 'app-form-progetto',
  standalone: true,
  imports: [
    ItBackButtonComponent,
    ItButtonDirective,
    ItTabContainerComponent,
    ItTabItemComponent
  ],
  templateUrl: './form-progetto.component.html',
  styleUrl: './form-progetto.component.scss'
})
export class FormProgettoComponent {

  activeTab=0
  conferma(){

  }
}
