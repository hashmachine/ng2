import { Component,Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date:{{event?.date}}</div>
        <div [ngSwitch]="event?.time">Time:{{event?.time}}
        <span  [ngClass]="getStartStyleClass()" *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span [ngClass]="getStartStyleClass()" *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span [ngClass]="getStartStyleClass()" *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price:\${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location:{{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url:{{event?.onlineUrl}}
        </div>
        
    </div>
    `,
    styles:[`
    .green{color:#003300 !important;}
    .Yellow{color:yellow;}
    .Blue{color:rgb(2, 2, 117)}
    .thumbnail{min-height:210px;}
    .pad-left{ margin-left:10px;}
    .well div{color:#bbb;}
    `]
})  
export class EventThumbnailComponent{
@Input() event:any
getStartStyleClass(){
    if (this.event && this.event.time === '8:00 am')
        return 'green'
    else if(this.event && this.event.time === '10:00 am')
        return 'Yellow'
    return 'Blue'
}
}