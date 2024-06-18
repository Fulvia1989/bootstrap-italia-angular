import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogo-ricerca-backoffice';

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(){
    this.apiService.testGet().subscribe(res => {
      console.log(res);
    })
  }
}
