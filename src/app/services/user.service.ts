import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders,} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Global} from './global';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService{
    public identity;
    public token;
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    //Metodo de logueo para datos de la api
    signUp(user_to_login, gethash = null):Observable<any>{
        if(gethash != null){
            user_to_login.gethash = gethash;
        }
        let json = JSON.stringify(user_to_login);
        let params = json;

        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(this.url+'login', params, {headers: headers})
                          .pipe(map(res => res));

    }
    //metodo para registrarse y enviar los datos a la api
    register(user_to_register):Observable<any>{
        let json = JSON.stringify(user_to_register);
        let params = json;

        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this._http.post(this.url+'register', params, {headers: headers})
                         .pipe(map(res => res));
    }
    //Metodo para identificar al usuario
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }
    //Metodo para el token del usuario
    getToken(){
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }
   
}