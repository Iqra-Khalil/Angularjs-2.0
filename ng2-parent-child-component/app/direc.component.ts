import {Component} from "angular2/core";

@Component({
    selector : "directive",
    template : `
        <div>
            <h3>Component 4</h3>
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
    `
})

export class MyDirective{
    title = "Directives";
    description = "To modify DOM elements or extend their behaviours";
}