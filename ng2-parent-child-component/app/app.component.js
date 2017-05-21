System.register(["angular2/core", "./ang2-def.component", "./com.component", "./direc.component", "./serv.component", "./rout.component", 'angular2/router', './home', './about'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ang2_def_component_1, com_component_1, direc_component_1, serv_component_1, rout_component_1, router_1, home_1, about_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ang2_def_component_1_1) {
                ang2_def_component_1 = ang2_def_component_1_1;
            },
            function (com_component_1_1) {
                com_component_1 = com_component_1_1;
            },
            function (direc_component_1_1) {
                direc_component_1 = direc_component_1_1;
            },
            function (serv_component_1_1) {
                serv_component_1 = serv_component_1_1;
            },
            function (rout_component_1_1) {
                rout_component_1 = rout_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.description = "Angular 2.0 component hierarchy";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n        <div>\n            <h1>Angular 2 basics demonstration</h1>\n            <p>{{description}}</p>\n             <ul>\n      <li><a [routerLink]=\"['/Home']\">Home Link</a></li>\n      <li><a [routerLink]=\"['/About']\" target=\"_blank\">About Link</a></li>\n    </ul>\n            \n        </div>\n        <angular2-def></angular2-def>\n        <component></component>\n        <directive></directive>\n        <router></router>\n        <service></service>\n         <router-outlet></router-outlet>\n    ",
                        providers: [home_1.HomeComponent, about_1.AboutComponent],
                        directives: [ang2_def_component_1.Angular2Definition, com_component_1.MyComponent, direc_component_1.MyDirective, serv_component_1.MyService, rout_component_1.MyRouter, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.HomeComponent },
                        { path: '/about', name: 'About', component: about_1.AboutComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map