"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_component_1 = require("../../base-component/base-component");
var cuenca_verde_service_1 = require("../../../data/services/cuenca-verde.service");
var messaging_service_1 = require("../../../data/services/messaging.service");
var procedures_manager_1 = require("../../../data/managers/procedures.manager");
var roles_manager_1 = require("../../../data/managers/roles.manager");
var tasks_manager_1 = require("../../../data/managers/tasks.manager");
var router_1 = require("@angular/router");
var ViewSelectedEjecucionComponent = (function (_super) {
    __extends(ViewSelectedEjecucionComponent, _super);
    function ViewSelectedEjecucionComponent(cuencaVerdeServices, messagingService, taskManager, proceduresManager, rolesManager, activatedRoute, router) {
        var _this = _super.call(this, proceduresManager, rolesManager) || this;
        _this.cuencaVerdeServices = cuencaVerdeServices;
        _this.messagingService = messagingService;
        _this.taskManager = taskManager;
        _this.proceduresManager = proceduresManager;
        _this.rolesManager = rolesManager;
        _this.activatedRoute = activatedRoute;
        _this.router = router;
        return _this;
    }
    ViewSelectedEjecucionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagingService.publish(new messaging_service_1.BusMessage('onRouteChanged', null));
        this.activatedRoute.paramMap
            .map(function (params) { return params.get('id') + ''; })
            .subscribe(function (id) {
            if (id) {
                _this.idExecution = id;
                /// console.log(this.idExecution);
                _this.getExecutionTaskById();
            }
            else {
                var link = ['/app'];
                _this.router.navigate(link);
            }
        });
    };
    ViewSelectedEjecucionComponent.prototype.ngOnDestroy = function () {
    };
    ViewSelectedEjecucionComponent.prototype.getExecutionTaskById = function () {
        var _this = this;
        this.taskManager.getExecutionTaskById(this.idExecution)
            .then(function (response) {
            _this.taskForExecution = response;
            console.log(_this.taskForExecution);
        }).catch(function (e) {
            console.log(e);
        });
    };
    return ViewSelectedEjecucionComponent;
}(base_component_1.BaseComponent));
ViewSelectedEjecucionComponent = __decorate([
    core_1.Component({
        selector: 'cuenca-execution-selected',
        templateUrl: './view-selected-ejecucion.component.html',
        styleUrls: ['./view-selected-ejecucion.component.css']
    }),
    __metadata("design:paramtypes", [cuenca_verde_service_1.CuencaVerdeService,
        messaging_service_1.MessagingService,
        tasks_manager_1.TasksManager,
        procedures_manager_1.ProceduresManager,
        roles_manager_1.RolesManager,
        router_1.ActivatedRoute,
        router_1.Router])
], ViewSelectedEjecucionComponent);
exports.ViewSelectedEjecucionComponent = ViewSelectedEjecucionComponent;
//# sourceMappingURL=view-selected-ejecucion.component.js.map