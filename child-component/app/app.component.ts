import {Component} from 'angular2/core';
import {SecondComponent} from './second';

@Component({
    selector: 'my-app',
    template:`     
    <h1>my parent component  </h1> <second-app></second-app>
    
    `
    directives:[SecondComponent]
})
export class AppComponent { }