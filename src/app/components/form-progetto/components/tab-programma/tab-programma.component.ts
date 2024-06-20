import { Component, EventEmitter, Output } from '@angular/core';
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

  programmaList : string[] = [];
  fondoList : string[] = [];
  bandoList : string[] = [];
  areaScientificaList : string[] = [];
  @Output() confermaEvt = new EventEmitter<any>();
  loading = false;

  constructor(
    private formBuilder : FormBuilder,
    private apiService : ApiService
  ){}
  ngOnInit(): void {
    this.form = this.buildForm();
    this.getProgramma();
    this.getAreaScientifica();

  }

  buildForm():FormGroup{
    let form:FormGroup = this.formBuilder.group({
      programma: [ this.progetto.programma, Validators.required],
      fondo: [{value:this.progetto.fondo, disabled: true}, Validators.required],
      bando:[{value:this.progetto.bando, disabled: true}, Validators.required],
      progetto: [this.progetto.progetto, Validators.required],
      areaScientifica: [this.progetto.areaScientifica, Validators.required],
      output: [this.progetto.output, Validators.required],
      finanziamento: [this.progetto.finanziamento, Validators.required]

    });
    return form
  }

  getProgramma(){
    this.apiService.getLista('listaProgrammi').subscribe(
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
       this.apiService.getLista('listaFondi', value).subscribe(
         res => {
           this.form.controls['fondo'].enable();
           this.fondoList = res;
         }
        )
     }
  }

  fondoSelected(value : string){
    this.bandoList = [];
    this.form.controls['bando'].setValue('');
    this.form.controls['bando'].disable();
     if( value && value != ''){
       this.apiService.getLista('listaBandi',value).subscribe(
         res => {
           this.form.controls['bando'].enable();
           this.bandoList = res;
         }
        )
     }
  }

  getAreaScientifica(){
    this.apiService.getLista('listaAreeScientifiche').subscribe(
      res => {
        this.areaScientificaList = res;
      }
     )
  }

  submit(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.confermaEvt.emit();
    }, 2000);
  }

}
