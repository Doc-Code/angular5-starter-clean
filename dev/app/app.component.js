var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = '';
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            template: "\n        <header class=\"app-header navbar\">\n            <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n            <button class=\"navbar-toggler sidebar-toggler d-md-down-none h-100 b-r-1 px-3\" type=\"button\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <ul class=\"nav navbar-nav d-md-down-none mr-auto\">\n\n            </ul>\n        </header>\n        <div class=\"app-body\">\n            <div class=\"sidebar\">\n                <nav class=\"sidebar-nav\">\n                    <ul class=\"nav\">\n                        <li class=\"nav-title text-center\">\n                            <span>Dashboard</span>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"index.html\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\n                        </li>\n\n                    </ul>\n                </nav>\n                <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\"></button>\n            </div>\n            <!-- Main content -->\n            <main class=\"main\">\n\n                <div class=\"container-fluid\">\n<ul>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n<li>asdasdas</li>\n</ul>\n                </div>\n                <!-- /.conainer-fluid -->\n            </main>\n\n        </div>\n     \n    "
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map