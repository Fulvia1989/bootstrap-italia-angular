import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

interface Progetto {
  programma : string;
  fondo: string;
  bando: string;
  progetto: string;
  areaScientifica: string;
  output: string;
  finanziamento: number;
}
interface Element {
  id: string,
  descrizione: string
}

@Component({
  selector: 'tab-programma',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './tab-programma.component.html',
  styleUrl: './tab-programma.component.scss'
})
export class TabProgrammaComponent {
   progetto: Progetto = {
    programma: '',
    fondo:  '',
    bando:  '',
    progetto:  '',
    areaScientifica:  '',
    output:  '',
    finanziamento: 0
  }
  declare form: FormGroup;

  programmaList : Element[] = [];
  fondoList : Element[] = [];
  bandoList : Element[] = [];
  areaScientificaList : Element[] = [];



  constructor(
    private formBuilder : FormBuilder,
    private apiService : ApiService
  ){}
  ngOnInit(): void {
    this.form = this.buildForm();
    this.getProgramma();

  }

  buildForm():FormGroup{
    let form:FormGroup = this.formBuilder.group({
      programma: [ this.progetto.programma, Validators.required],
      fondo: [{value:this.progetto.fondo, disabled: true}, Validators.required],
      bando:[{value:this.progetto.bando, disabled: true}, Validators.required],
      progetto: [this.progetto.progetto, Validators.required],
      areaScientifica: [{value:this.progetto.areaScientifica, disabled: true}, Validators.required],
      output: [this.progetto.output, Validators.required],
      finanziamento: [this.progetto.finanziamento, Validators.required]

    });
    return form
  }

  getProgramma(){
    this.apiService.getListaProgrammi().subscribe(
      res => {
        this.programmaList = res;
      }
     )
  }

  programmaSelected(value : string){
    this.fondoList = [];
    this.form.controls['fondo'].setValue('');
    this.fondoSelected('');
     if( value && value != ''){
       this.apiService.getLista('fondi', value).subscribe(
         res => {
           this.form.controls['fondo'].enable();
           this.fondoList = res;
         }
        )
     }
  }

  fondoSelected(value : string){
    this.bandoList = [];
    this.form.controls['bando'].disable();
     if( value && value != ''){
       this.apiService.getLista('bandi',value).subscribe(
         res => {
           this.form.controls['bando'].enable();
           this.bandoList = res;
         }
        )
     }
  }

  submit(){

  }
}
