import {Component} from "angular2/core";

@Component({
    selector : "router",
    template : `
        <div>
            <h3>Component 6</h3>
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
    `
})

export class MyRouter{
    title = "Routers";
    description = "They are purely responsible for navigation";
}