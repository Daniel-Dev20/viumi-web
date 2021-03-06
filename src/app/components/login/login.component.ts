import { HttpResponse } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title:string;
  public user: User;
  public identity;
  public token;
  public errorMessage;
  public loginMessage;
  constructor(
    private _userService: UserService
  ) { 
    this.title = "Iniciar sesion en viumi";
    this.user = new User('', '', '', '', '', 'ROLE_USER','');
    this.loginMessage = "Has iniciado sesion en viumi";
  }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log(this.identity);
    console.log(this.token);
  }
  onSubmit(form){
    console.log(this.user);
    //Conseguir los datos del usuario identificado
    this._userService.signUp(this.user).subscribe(
      response => {
      let identity = response.user;
      this.identity = identity;
      console.log(identity);
      if(!this.identity._id){
        alert("El usuario no esta correctamente identificado");
      }else{
        //Crear elemento en el localstorage para tener al usuario en sesion
        localStorage.setItem('identity', JSON.stringify(identity));
        //Conseguir el token para enviarselo a cada peticion http
        this._userService.signUp(this.user, 'true').subscribe(
                response => {
                let token = response.token;
                this.token = token;
                console.log(identity);
                if(this.token.length <= 0){
                  alert("El token no se ha generado");
                }else{
                  //Crear elemento en el localstorage para tener el token disponible
                    localStorage.setItem('token', this.token);
                  //Conseguir el token para enviarselo a cada peticion http
                  console.log(token);
                  console.log(identity);
                }
          
          
                },
                error => {
                  var errorMessage = <any>error;
                  if(errorMessage != null){
                  
                    this.errorMessage = error.error.message;
                    console.log(error);
                  }
                }
              );
      }


      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
         
          this.errorMessage = error.error.message;
          console.log(error);
        }
      }
    );
  }
  
}
