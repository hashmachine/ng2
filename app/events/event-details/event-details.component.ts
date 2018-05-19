import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import { ISession } from "..";

@Component({
    templateUrl:'app/events/event-details/event-details.component.html',
    styles:[`
        .container{padding-left:20px;padding-right:20px;}
        .event-image{height:100px;}
        a {cursor:pointer;}
    `]
})
export class EventDetailsComponent{
    event:any
    addMode:boolean
    filterBy:string='all'
    sortBy:string='votes'
    
    constructor(private eventServive:EventService,private route:ActivatedRoute){

    }

    ngOnInit(){
        this.route.params.forEach((params:Params)=>{
            this.event = this.eventServive.getEvent(
                +params['id'])
                this.addMode =false
        })
        
    }

    addSession(){
        this.addMode = true
    }
   
    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventServive.updateEvent(this.event)
        this.addMode = false
    
    }
    cancelAddSession(){
        this.addMode =false
    }
}