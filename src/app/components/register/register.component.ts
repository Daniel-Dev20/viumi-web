import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user';
import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import {UserService} from '../../services/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public errorMessage;
  public alertRegister;
  public user_to_register: User;

  constructor(
    private _userService: UserService
  ) { 
    this.user_to_register = new User('', '', '', '', '', 'ROLE_USER','');
  
  }

  ngOnInit(): void {
   
  }


  onSubmitRegister(form){
    console.log(this.user_to_register);
    this._userService.register(this.user_to_register).subscribe(
      response => {
        let user = response.user;
        this.user_to_register = user;

        if(!this.user_to_register._id){
          this.alertRegister = 'Error al registarse';
        }else{
          this.alertRegister = 'El registro se ha realizado correctamente, identificate con'+this.user_to_register.email;
          this.user_to_register = new User('', '', '', '', '', 'ROLE_USER','');
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
         var body = JSON.parse(error._body);
         this.alertRegister = body.message;
         console.log(error);
        }
      }
    )
  }

}
