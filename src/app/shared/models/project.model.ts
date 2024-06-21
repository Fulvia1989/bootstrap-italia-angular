export interface Progetto {
    id:number,
    programma:string,
    fondo:string,
    bando:string,
    codice:string,
    area:string,
    output:string,
    finanziamento:number,
    beneficiari:any[]
}

export interface ProgettoForm{
    programma: '',
    fondo:  '',
    bando:  '',
    progetto:  '',
    areaScientifica:  '',
    output:  '',
    finanziamento: 0
}

export interface Media{
    tipo:string,
    file:string,
    link:string,
    file_type:string,
    fileName:string,
    numeroLiberatorie:number,
    noLiberatorie:false,
    data:number;
}