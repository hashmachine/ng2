import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';


@Component({
  templateUrl:'app/user/profile.component.html',
  styles:[`
    .form-group em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error :: -webkit-input-holder{color:#999;}
    `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl
  constructor(private auth:AuthService,private router:Router,
              @Inject(TOASTR_TOKEN) private toastr:Toastr){

  }

  ngOnInit(){
      this.firstName = new FormControl(this.auth.currentUser.firstName,
        [Validators.required,Validators.pattern('[a-zA-Z].*')])

      this.lastName = new FormControl(this.auth.currentUser.lastName,
        [Validators.required,Validators.pattern('[a-zA-Z].*')])
        
      this.profileForm = new FormGroup({
        firstName:this.firstName,
        lastName:this.lastName
      })
      
    }
  saveProfile(formValues){
    if(this.profileForm.valid){
        this.auth.updateCurrentUser(formValues.firstName,formValues.lastName)
        this.toastr.success('Profile updated successfully!')
    }
  }
 cancel(){
    this.router.navigate(['events'])      
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

}