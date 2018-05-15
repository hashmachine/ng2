import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl:'app/user/login.component.html',
    styles:[`
       div.form-group em{float:right; color:red;}
    `]
})
export class LoginComponent{
    constructor(private auth:AuthService,private router:Router){

    }
    login(formValues){
        this.auth.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['events'])
    }
    cancel(){
         this.router.navigate(['events'])
    }
};