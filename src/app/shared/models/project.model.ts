export interface Progetto {
    id:number,
    programma:string,
    fondo:string,
    bando:string,
    codice:string,
    area:string,
    output:string,
    finanziamento:number,
    beneficiari:Beneficiari[],
    media?:Media[]
}

export interface ProgettoForm{
    id?:string;
    programma: '',
    fondo:  '',
    bando:  '',
    progetto:  '',
    areaScientifica:  '',
    output:  '',
    finanziamento: 0
}

export interface Media{
    id?:number,
    info?:string,
    stato?:string,
    tipo:string,
    file:string,
    link:string,
    file_type:string,
    fileName:string,
    numeroLiberatorie:number,
    noLiberatorie:false,
    data:number;
}


export interface Beneficiari {
  nome:string,
  ruolo: string,
  email:string,
  telefono: string,
  contributo: string,
  privacy?:boolean //nella tabella dei progetti non è presente
}
