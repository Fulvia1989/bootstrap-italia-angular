import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user:Subject<any> = new Subject();
  // public user$ = this.user.asObservable();

  constructor() { }

  

  setUser(user:{nome:string,cognome:string,ruoli:string[],id:number}){
    let pre = `${this.random()}${this.random()}${this.random()}`;
    let post = `${this.random()}${this.random()}${this.random()}`;
    let name = (user.nome) ? user.nome : '';
    let surname = user.cognome ? user.cognome : '';
    let obj = {
      userName:`${pre}${name} ${surname}${post}`,
      roles: user.ruoli,
      id:`${post}${user.id}${pre}`
    }
    let item = JSON.stringify(obj);
    let encryptedItem = btoa(item);
    sessionStorage.removeItem('user');
    sessionStorage.setItem('user', encryptedItem);
  }
  private getElementDecripted(){
    let itemEnc = sessionStorage.getItem('user');
    if(itemEnc){
      let itemString = atob(itemEnc);
      return JSON.parse(itemString);
    } else {
      return null
    }
  }
  getUserName(){
    let userName = this.getElementDecripted() ? this.getElementDecripted().userName : null;
    userName = userName ? userName.substring(3,userName.length-3) : userName;
    return userName;
  };
  getUserRoles(){
    return this.getElementDecripted() ? this.getElementDecripted().roles : null ;
  }

  random (){
    return Math.floor(Math.random() * 10);
  }
}
