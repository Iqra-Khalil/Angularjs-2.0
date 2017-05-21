import {Component} from "angular2/core";

@Component({
    selector : "service",
    template : `
        <div>
            <h3>Component 5</h3>
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
    `
})

export class MyService{
    title = "Services";
    description = "Services are plane typescript classes they are used to make http calls,logging etc";
}