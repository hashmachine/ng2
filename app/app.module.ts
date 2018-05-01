import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'
import { EventsListComponent, EventThumbnailComponent ,EventRouteActivator,
     EventListResolver,EventService,EventDetailsComponent,CreateEventComponent} from './events/index';
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { Router, RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";

@NgModule({
imports:[BrowserModule,RouterModule.forRoot(appRoutes)],
declarations:[EventsAppComponent,EventsListComponent, EventThumbnailComponent,NavBarComponent,EventDetailsComponent,
    CreateEventComponent,Error404Component],
bootstrap:[EventsAppComponent],
providers:[EventService,ToastrService,EventRouteActivator,EventListResolver, {provide:'CanDeactivateCreateEvent',useValue:CheckDirtyState}]    
})

export class AppModule{
  
    }
    function CheckDirtyState(component:CreateEventComponent){
        if (component.isDirty)
            return window.confirm("You haven't saved this event. Do you want to cancel?")
        return false
}