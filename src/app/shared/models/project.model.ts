export interface Progetto {
    id:number,
    programma:string,
    fondo:string,
    bando:string,
    codice:string,
    area:string,
    output:string,
    finanziamento:number,
    beneficiari:Beneficiari[]
}

export interface ProgettoForm{
    id?:string,
    programma: string,
    fondo:  string,
    bando:  string,
    progetto:  string,
    areaScientifica:  string,
    output:  string,
    finanziamento: number
}

export interface Beneficiari {
  nome:string,
  ruolo: string,
  email:string,
  telefono: string,
  contributo: string,
  privacy?:boolean //nella tabella dei progetti non è presente
}
