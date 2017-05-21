import {Component} from "angular2/core";

@Component({
    selector : "angular2-def",
    template : `
        <div>
            <h1>Component 2</h1>
            <h2>{{title}}</h2>
            <p>{{definition}}</p>
        </div>
    `
})


export class Angular2Definition{
    title = "Angular 2";
    definition = "It is a front-end Framework for building large Javascript applications";
}