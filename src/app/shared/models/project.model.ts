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