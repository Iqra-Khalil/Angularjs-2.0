import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';   //for Routing

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
bootstrap(AppComponent , [ROUTER_PROVIDERS]);