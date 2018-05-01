import { Component } from "@angular/core";

@Component({
    template:`
    <h1 Class="errorMessage">404'd</h1>
    <br/>
    <br/>
    <h4>Page you are looking for doesn't exist!</h4>
    `,
    styles:[`
    .errorMessage{
        margin-top:150px;
        font-size:170px;
        text-align:center;
    }
    h4{text-align:center;}
    `]
})
export class Error404Component{
constructor(){

}
}