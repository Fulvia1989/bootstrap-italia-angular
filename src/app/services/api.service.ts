import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

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

  public get(
    resourceName: string,
    options:HttpOptions = { }
  ): Observable<any> {
    options.headers = options.headers ? options.headers :  this.getHeaders();
    return this.http
      .get(`${this.baseUrl}/${resourceName}`, options)
  }

  getProgetti(){
    return this.get('/progetti').pipe(
      tap(()=> console.log('chiamata progetti')),
      catchError(err =>{
        return throwError(()=> err || 'Server error');

      })
    )
  }
}
