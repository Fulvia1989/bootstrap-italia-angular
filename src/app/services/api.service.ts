import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Progetto } from '../shared/models/project.model';

export interface HttpOptions {
  headers?: HttpHeaders;
  context?: HttpContext;
  observe?: "body" | undefined;
  params?:  HttpParams;
  reportProgress?: boolean;
  responseType?:  "json" | undefined;
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = '/js-server'

  constructor(
    private http: HttpClient,
  ) { }

  public getHeaders() {
    // I included these headers because otherwise FireFox will request text/html instead of application/json
    let headers = new HttpHeaders().set(
      `Content-Type`,
      `application/json; charset=utf-8`
    );
    return headers;
  }

  public get<T>(
    resourceName: string,
    options:HttpOptions = { }
  ): Observable<T> {
    options.headers = options.headers ? options.headers :  this.getHeaders();
    return this.http
      .get<T>(`${this.baseUrl}/${resourceName}`, options)
  }

  getProgetti(){
    return this.get<Progetto[]>('/progetti').pipe(
      tap(()=> console.log('chiamata progetti')),
      catchError(err =>{
        return throwError(()=> err || 'Server error');

      })
    )
  }


  getListaProgrammi(){
    return this.get<any>('/listaProgrammi').pipe(
      tap(()=> console.log('chiamata programmi')),
      catchError(err =>{
        return throwError(()=> err || 'Server error');

      })
    )
  }

  getLista( url: string ,programmaId: string){
    console.log(programmaId)
    return this.get<any>(`/${url}`).pipe(
      tap(()=> console.log('chiamata fondi')),
      catchError(err =>{
        return throwError(()=> err || 'Server error');

      })
    )
  }
}
