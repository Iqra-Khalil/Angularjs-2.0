import {Component} from "angular2/core";


@Component({
    selector : "component",
    template : `
        <div>
            <h3>Component 3</h3>
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
    `
})

export class MyComponent{
    title = "Components";
    description = "It Encapsulates template, data and the behaviour";
}