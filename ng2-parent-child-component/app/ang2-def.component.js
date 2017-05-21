System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Angular2Definition;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Angular2Definition = (function () {
                function Angular2Definition() {
                    this.title = "Angular 2";
                    this.definition = "It is a front-end Framework for building large Javascript applications";
                }
                Angular2Definition = __decorate([
                    core_1.Component({
                        selector: "angular2-def",
                        template: "\n        <div>\n            <h1>Component 2</h1>\n            <h2>{{title}}</h2>\n            <p>{{definition}}</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2Definition);
                return Angular2Definition;
            }());
            exports_1("Angular2Definition", Angular2Definition);
        }
    }
});
//# sourceMappingURL=ang2-def.component.js.map