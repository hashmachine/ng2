import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Router, RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";

@NgModule({
imports:[BrowserModule,RouterModule.forRoot(appRoutes)],
declarations:[EventsAppComponent,EventsListComponent, EventThumbnailComponent,NavBarComponent,EventDetailsComponent,
    CreateEventComponent,Error404Component],
bootstrap:[EventsAppComponent],
providers:[EventService,ToastrService]    
})

export class AppModule{}