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
    id?:string
    programma: string,
    fondo:  string,
    bando:  string,
    progetto:  string,
    areaScientifica:  string,
    output:  string,
    finanziamento: number
}
