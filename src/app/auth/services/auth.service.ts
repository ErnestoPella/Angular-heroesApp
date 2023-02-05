import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environments.baseUrl;
  private _auth: Auth | undefined;

  get auth(){
    return {...this._auth!};
  }

  constructor( private http: HttpClient) { }


  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(auth => {
        this._auth = auth,
        localStorage.setItem('id',auth.id);
      })
    );
  }

  verificaAutenticacion(): Observable<boolean>{

    if( !localStorage.getItem('id') ){
      return of(false);
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
    .pipe(
      map(auth => {
        this._auth = auth;
        return true;
      })
    );
  }


  logout(){
    this._auth =undefined;
  }

}
