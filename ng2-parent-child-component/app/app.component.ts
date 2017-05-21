import {Component} from "angular2/core";
import {Angular2Definition} from "./ang2-def.component";
import {MyComponent} from "./com.component";
import {MyDirective} from "./direc.component";
import {MyService} from "./serv.component";
import {MyRouter} from "./rout.component";
import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; 
import {HomeComponent} from './home';
import {AboutComponent} from './about';

@Component({
    selector : "my-app",
    template : `
        <div>
            <h1>Angular 2 basics demonstration</h1>
            <p>{{description}}</p>
             <ul>
      <li><a [routerLink]="['/Home']">Home Link</a></li>
      <li><a [routerLink]="['/About']" target="_blank">About Link</a></li>
    </ul>
            
        </div>
        <angular2-def></angular2-def>
        <component></component>
        <directive></directive>
        <router></router>
        <service></service>
         <router-outlet></router-outlet>
    `,
    providers:  [HomeComponent, AboutComponent],
    directives : [Angular2Definition,MyComponent,MyDirective,MyService,MyRouter,ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home',   name: 'Home',     component: HomeComponent},
  {path: '/about', name: 'About', component: AboutComponent},
])

export class AppComponent{
    description = "Angular 2.0 component hierarchy"
}