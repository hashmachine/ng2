import { Component, OnInit, Output,EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ISession } from "..";
import {restrictedWords} from '../index'

@Component({
    selector:'create-session',
    templateUrl:'app/events/event-details/create-session.component.html',
    styles:[`
    .form-group em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error textarea {background-color:#E3C3C5;}
    .error select {background-color:#E3C3C5;}
    .error :: -webkit-input-holder{color:#999;}
    `]
})
export class CreateSessionComponent implements OnInit{
    @Output() saveSessionForm = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    newSessionForm: FormGroup
    name: FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl

    ngOnInit(){
        this.name = new FormControl('',Validators.required)
        this.presenter = new FormControl('',Validators.required)
        this.duration = new FormControl('',Validators.required)
        this.level = new FormControl('',Validators.required)
        this.abstract = new FormControl('',[Validators.required,Validators.maxLength(400),
                        restrictedWords(['foo','bar','shit','sex'])])
        
        this.newSessionForm = new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }
    
    saveSession(formValues){
        if(this.newSessionForm.valid){
            let session:ISession = {
                id:undefined,
                name:formValues.name,
                presenter:formValues.presenter,
                duration: +formValues.duration,
                level:formValues.level,
                abstract:formValues.abstract,
                voters:[]

            }
        this.saveSessionForm.emit(session)
        console.log("in Session Compo: "+JSON.stringify(session))
        console.log("form is "+this.newSessionForm.valid)
        }
    }
    cancel(){
        this.cancelAddSession.emit()
    }
   
}