import { Component } from "@angular/core";

@Component({
    template:`
    <h1 Class="errorMessage">404'd</h1>
    <br/>
    <br/>
    <p>Page looking for doesn't exist!</p>
    `,
    styles:[`
    .errorMessage{
        margin-top:150px;
        font-size:170px;
        text-align:center;
    }
    `]
})
export class Error404Component{
constructor(){

}
}