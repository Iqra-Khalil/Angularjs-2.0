import {bootstrap}    from 'angular2/platform/browser';     //for bootstraping

import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';         //routeConfig for define routes and router_directive for links

import {Component} from 'angular2/core';                    //for component

//importing components
import {HomeComponent} from './home';
import {AboutComponent} from './about';

@Component({
    selector: 'my-selector',
    template: `<div><h1>navigate another page</h1></div>
     <ul>
      <li><a [routerLink]="['/Home']" target="_blank">Home Link</a></li>
      <li><a [routerLink]="['/About']" target="_blank">About Link</a></li>
    </ul>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home',   name: 'Home',     component: HomeComponent},
  {path: '/about', name: 'About', component: AboutComponent},
])
export class MainComponent { }



bootstrap(MainComponent, [ROUTER_PROVIDERS]);