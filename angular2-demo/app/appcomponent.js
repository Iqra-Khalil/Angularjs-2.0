System.register(['angular2/core', './second'], function(exports_1, context_1) {
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
    var core_1, second_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (second_1_1) {
                second_1 = second_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.id = 2;
                    this.name = 'khadija';
                    this.contact = { name: "john", id: 11, lastname: "papa", phone: "92832938282", email: "www.sdfh.com" };
                    this.showdata = false;
                    this.title = 'course list';
                    this.courses = ['PF', 'java', 'c#', 'MPL'];
                    this.myfav = this.courses[3, 1];
                    this.Message = '';
                    //key implement
                    this.values = '';
                    this.val = '';
                }
                AppComponent.prototype.onselect = function () {
                    this.showdata = true;
                };
                AppComponent.prototype.onClickMe = function () {
                    this.Message = 'button presses!';
                };
                AppComponent.prototype.addcourse = function (newcourse) {
                    if (newcourse) {
                        this.courses.push(newcourse);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        // directives:[NgFor],
                        selector: 'my-app',
                        template: "<h1>Dear MPL students welcome in the world of Angular 2.0</h1>\n    {{id}} {{name}}    \n    \n   <h1>{{title}}</h1>\n    <h2>My favorite course is: {{myfav}}</h2>\n    <p>courses:</p>\n    <ul>\n    <!--foreach(var i in arrname) -->\n      <li *ngFor=\"#course of courses\">\n        {{ course }}\n      </li>\n    </ul>\n   <p *ngIf=\"myfav.length >1\">student is genius!</p>\n\n<button (click)=\"onClickMe()\">Click me!</button>\n    {{Message}}\n    \n    \n     <input #box (keyup)=\"values=box.value\">\n    <p [style.background.color]=\"'yellow'\">{{values}}</p>\n    <!-- key filteration -->\n    \n   <input #ent (keyup.enter)=\"val=ent.value\">\n    <p>{{val}}</p> \n    <!--   new program   -->\n    enter course <input #newcourse\n      (keyup.enter)=\"addcourse(newcourse.value)\"\n        />\n\n    <button (click)=addcourse(newcourse.value)>Add</button>\n\n    <ul><li *ngFor=\"#course of courses\">{{course}}</li></ul>\n<sec></sec>\n     ",
                        directives: [second_1.seccomp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=appcomponent.js.map