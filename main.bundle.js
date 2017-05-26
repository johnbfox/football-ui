webpackJsonp([2,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_league_league_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_league_table_table_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_league_teams_teams_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__routes_home_home_component__["a" /* HomeComponent */] },
    { path: 'league/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__routes_league_league_component__["a" /* LeagueComponent */],
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__routes_league_table_table_component__["a" /* TableComponent */]
            }, {
                path: 'teams',
                component: __WEBPACK_IMPORTED_MODULE_5__routes_league_teams_teams_component__["a" /* TeamsComponent */]
            }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(212),
        styles: [__webpack_require__(176)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_league_block_league_block_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_home_home_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_league_league_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nav_tabs_nav_tabs_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_league_table_table_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_league_teams_teams_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_team_block_team_block_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_roster_table_roster_table_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_loading_layer_loading_layer_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_team_charts_team_charts_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_league_block_league_block_component__["a" /* LeagueBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_7__routes_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__routes_league_league_component__["a" /* LeagueComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_nav_tabs_nav_tabs_component__["a" /* NavTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__routes_league_table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__routes_league_teams_teams_component__["a" /* TeamsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_team_block_team_block_component__["a" /* TeamBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_roster_table_roster_table_component__["a" /* RosterTableComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_loading_layer_loading_layer_component__["a" /* LoadingLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_team_charts_team_charts_component__["a" /* TeamChartsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(213),
        styles: [__webpack_require__(177)],
        host: {
            class: 'footer'
        }
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(214),
        host: {
            class: 'header'
        }
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__league_block__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeagueBlockComponent = (function () {
    function LeagueBlockComponent() {
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    LeagueBlockComponent.prototype.ngOnInit = function () {
    };
    LeagueBlockComponent.prototype.selectLeague = function () {
        this.clicked.emit(this.model.id);
    };
    return LeagueBlockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], LeagueBlockComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__league_block__["a" /* LeagueBlock */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__league_block__["a" /* LeagueBlock */]) === "function" && _a || Object)
], LeagueBlockComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], LeagueBlockComponent.prototype, "clicked", void 0);
LeagueBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-league-block',
        template: __webpack_require__(215),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], LeagueBlockComponent);

var _a, _b;
//# sourceMappingURL=league-block.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingLayerComponent = (function () {
    function LoadingLayerComponent() {
    }
    LoadingLayerComponent.prototype.ngOnInit = function () {
    };
    return LoadingLayerComponent;
}());
LoadingLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-loading-layer',
        host: {
            class: 'loading-layer'
        },
        template: ''
    }),
    __metadata("design:paramtypes", [])
], LoadingLayerComponent);

//# sourceMappingURL=loading-layer.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavTabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavTabsComponent = (function () {
    function NavTabsComponent() {
        this.tabClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    NavTabsComponent.prototype.ngOnInit = function () {
    };
    NavTabsComponent.prototype.click = function (clickedTab) {
        this.tabClicked.emit(clickedTab.id);
    };
    return NavTabsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], NavTabsComponent.prototype, "tabs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], NavTabsComponent.prototype, "tabClicked", void 0);
NavTabsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-nav-tabs',
        template: __webpack_require__(216)
    }),
    __metadata("design:paramtypes", [])
], NavTabsComponent);

var _a;
//# sourceMappingURL=nav-tabs.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RosterTableComponent = (function () {
    function RosterTableComponent() {
        this.groups = {};
    }
    RosterTableComponent.prototype.ngOnChanges = function () {
        if (this.players) {
            this.organizePlayers();
        }
    };
    RosterTableComponent.prototype.ngOnInit = function () {
    };
    RosterTableComponent.prototype.organizePlayers = function () {
        this.groups = {
            'Goalkeepers': [],
            'Defenders': [],
            'Midfielders': [],
            'Attackers': []
        };
        this.groupNames = Object.keys(this.groups);
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.position.includes('Keeper')) {
                this.groups['Goalkeepers'].push(player);
            }
            else if (player.position.includes('Back')) {
                this.groups['Defenders'].push(player);
            }
            else if (player.position.includes('Midfield') || player.position.includes('Wing')) {
                this.groups['Midfielders'].push(player);
            }
            else {
                this.groups['Attackers'].push(player);
            }
        }
    };
    return RosterTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], RosterTableComponent.prototype, "players", void 0);
RosterTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-roster-table',
        template: __webpack_require__(217)
    }),
    __metadata("design:paramtypes", [])
], RosterTableComponent);

//# sourceMappingURL=roster-table.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_team__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_block_model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamBlockComponent = (function () {
    function TeamBlockComponent() {
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TeamBlockComponent.prototype.ngOnInit = function () {
    };
    TeamBlockComponent.prototype.blockClicked = function () {
        this.clicked.emit(this.model.team.id);
    };
    return TeamBlockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_team__["a" /* Team */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_team__["a" /* Team */]) === "function" && _a || Object)
], TeamBlockComponent.prototype, "team", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__team_block_model__["a" /* TeamBlock */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__team_block_model__["a" /* TeamBlock */]) === "function" && _b || Object)
], TeamBlockComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], TeamBlockComponent.prototype, "clicked", void 0);
TeamBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-team-block',
        template: __webpack_require__(218),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], TeamBlockComponent);

var _a, _b, _c;
//# sourceMappingURL=team-block.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamChartsComponent = (function () {
    function TeamChartsComponent() {
    }
    TeamChartsComponent.prototype.ngOnChanges = function () {
        var countryCountTmp = {};
        var data = [];
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (countryCountTmp[player.nationality]) {
                countryCountTmp[player.nationality]++;
            }
            else {
                countryCountTmp[player.nationality] = 1;
            }
        }
        for (var country in countryCountTmp) {
            data.push({
                'name': country,
                'value': countryCountTmp[country]
            });
        }
        this.countryCount = countryCountTmp;
        var margin = { top: 20, right: 20, bottom: 30, left: 80 }, width = 850 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        // set the ranges
        var y = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]()
            .range([height, 0])
            .padding(0.1);
        var x = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .range([0, width]);
        // append the svg object to the body of the page
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.natlChartContainer.nativeElement)
            .select('svg')
            .remove();
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.natlChartContainer.nativeElement).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // Scale the range of the data in the domains
        x.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](data, function (d) { return d.value; })]);
        y.domain(data.map(function (d) { return d.name; }));
        //y.domain([0, d3.max(data, function(d) { return d.sales; })]);
        // append the rectangles for the bar chart
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr('fill', 'steelblue')
            .attr("class", "bar")
            .attr("width", function (d) { return x(d.value); })
            .attr("y", function (d) { return y(d.name); })
            .attr("height", y.bandwidth());
        // add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](x));
        // add the y Axis
        svg.append("g")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](y));
    };
    return TeamChartsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TeamChartsComponent.prototype, "players", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('nationalityChart'),
    __metadata("design:type", Object)
], TeamChartsComponent.prototype, "natlChartContainer", void 0);
TeamChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-team-charts',
        template: __webpack_require__(219),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], TeamChartsComponent);

//# sourceMappingURL=team-charts.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return League; });
var League = (function () {
    function League() {
    }
    return League;
}());

//# sourceMappingURL=league.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
var Table = (function () {
    function Table() {
    }
    return Table;
}());

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".page-content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: 'space-between';\n      -ms-flex-pack: 'space-between';\n          justify-content: 'space-between';\n  background-color: #E8E8EE;\n  padding: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: scroll; }\n\n.header {\n  padding: 12px 24px 12px 24px;\n  background: #2e2e2e; }\n\n.header__search-bar {\n  display: block;\n  float: right; }\n\n.footer {\n  height: 32px;\n  background: #778899;\n  color: #f9f9f9;\n  padding: 6px 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".bar {\n  fill: #6F257F; }\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #D4D8DA;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n\n.x path {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_team__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.leaguesUrl = 'http://api.football-data.org/v1';
    }
    DataService.prototype.getLeagues = function () {
        return this.http.get(this.leaguesUrl + "/competitions", { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getLeague = function (teamId) {
        return this.http.get(this.leaguesUrl + "/competitions/" + teamId, { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getTeams = function (leagueId) {
        var _this = this;
        return this.http.get(this.leaguesUrl + "/competitions/" + leagueId + "/teams", { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) {
            return _this.extractTeams(response.json().teams);
        })
            .catch(this.handleError);
    };
    DataService.prototype.getTeam = function (teamId) {
        return this.http.get(this.leaguesUrl + "/teams/" + teamId, { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.extractTeams = function (teams) {
        var newTeams = [];
        for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
            var team = teams_1[_i];
            var t = new __WEBPACK_IMPORTED_MODULE_1__models_team__["a" /* Team */]();
            t.name = team.name;
            t.shortName = team.shortName;
            t.squadMarketValue = team.squadMarketValue;
            t.crestUrl = team.crestUrl;
            t.id = team._links.self.href.match(new RegExp('[^/]+(?=/$|$)'))[0];
            newTeams.push(t);
        }
        return newTeams;
    };
    DataService.prototype.getTable = function (leagueId) {
        return this.http.get(this.leaguesUrl + "/competitions/" + leagueId + "/leagueTable", { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getPlayers = function (teamId) {
        return this.http.get(this.leaguesUrl + "/teams/" + teamId + "/players", { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json().players; })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('X-Auth-Token', '58bc082542554a4a9f1d8f2fdf8bb48d');
        headers.append('X-Response-Control', 'full');
        return headers;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<div class=\"application\">\n  <app-header></app-header>\n\n    <div class=\"page-content\">\n      <router-outlet></router-outlet>\n    </div>\n\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "John B. Fox\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<a href=\"/\"><span class=\"nav-header pull-left\">Football Watcher</span></a>\n<div class=\"pull-right\">\n  <input type=\"text\"/>\n  <button>Search</button>\n</div>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"league-block\" (click)=\"selectLeague()\">\n  <img [src]=\"model.getLogoUrl()\" class=\"league-block__logo\"/>\n  <span class=\"league-block__title\">\n    {{model.title}}\n  </span>\n</div>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav-tabs\">\n  <li *ngFor=\"let tab of tabs\"\n      [ngClass]=\"{'nav-tabs__tab': !tab.active, 'nav-tabs__tab--active': tab.active}\"\n      (click)=\"click(tab)\">\n    {{tab.name}}\n  </li>\n</ul>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<table class=\"roster-table\">\n  <thead class=\"roster-table__header\">\n    <th>#</th>\n    <th>Player</th>\n    <th>Position</th>\n    <th>Nationality</th>\n  </thead>\n  <tbody class=\"roster-table__body\">\n\n    <ng-template ngFor let-group [ngForOf]=\"groupNames\">\n      <td colspan=\"4\" class=\"roster-table__group\">{{group}}</td>\n      <tr class=\"roster-table__r\" *ngFor=\"let player of groups[group]\">\n        <td class=\"roster-table__c\">{{player.jerseyNumber}}</td>\n        <td class=\"roster-table__c\">{{player.name}}</td>\n        <td class=\"roster-table__c\">{{player.position}}</td>\n        <td class=\"roster-table__c\">{{player.nationality}}</td>\n      </tr>\n    </ng-template>\n\n  </tbody>\n</table>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'team-list__block':true, 'team-list__block--active': model.active }\" (click)=\"blockClicked()\">\n  <div class=\"team-list__icon\">\n    <img src=\"{{model.team.crestUrl}}\" style=\"max-width:25px; max-height:25px\"/>\n  </div>\n  <div class=\"team-list__team\">\n    {{model.team.name}}\n  </div>\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div #nationalityChart class=\"nationality-bars\">\n\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-title\">Leagues</h2>\n<div class=\"league-blocks\">\n  <app-league-block *ngFor=\"let league of leagueBlocks\"\n                    [model]=\"league\"\n                    (clicked)=\"onClicked($event)\"\n                    name=\"{{league.caption}}\">\n  </app-league-block>\n</div>\n\n<h2 class=\"page-title\">Tournaments</h2>\n<div class=\"league-blocks\">\n  <app-league-block *ngFor=\"let tourney of tourneyBlocks\"\n                    [model]=\"tourney\"\n                    (clicked)=\"onClicked($event)\"\n                    name=\"{{tourney.caption}}\">\n  </app-league-block>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-title\">{{table.leagueCaption}}</h2>\n<div class=\"card\">\n  <app-nav-tabs [(tabs)]=\"tabs\" (tabClicked)=\"navigate($event)\">\n  </app-nav-tabs>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<table class=\"league-table\" *ngIf=\"table\">\n  <thead>\n    <th>Position</th>\n    <th>Team</th>\n    <th>GP</th>\n    <th>P</th>\n    <th>W</th>\n    <th>L</th>\n    <th>GF</th>\n    <th>GA</th>\n    <th>Dif</th>\n  </thead>\n  <tbody>\n    <tr class=\"league-table__row\" *ngFor=\"let row of table.standing\">\n      <td class=\"league-table__c\">{{row.position}}</td>\n      <td class=\"league-table__c\">{{row.teamName}}</td>\n      <td class=\"league-table__c\">{{row.playedGames}}</td>\n      <td class=\"league-table__c\">{{row.points}}</td>\n      <td class=\"league-table__c\">{{row.wins}}</td>\n      <td class=\"league-table__c\">{{row.losses}}</td>\n      <td class=\"league-table__c\">{{row.goals}}</td>\n      <td class=\"league-table__c\">{{row.goalsAgainst}}</td>\n      <td class=\"league-table__c\">{{row.goalDifference}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class=\"horiztonal-flex\">\n  <div class=\"team-list\">\n    <app-team-block *ngFor=\"let team of teamBlocks\" [model]=\"team\" (clicked)=\"teamSelected($event)\"></app-team-block>\n  </div>\n  <div class=\"team-detail\">\n    <app-loading-layer></app-loading-layer>\n    <div *ngIf=\"selectedTeam\" style=\"z-index:0\">\n      <div class=\"team-detail__header\">\n        <div class=\"team-detail__header--left\">\n          <h3>{{selectedTeam.name}}</h3>\n        </div>\n        <div class=\"team-detail__header--right\">\n          <button class=\"nav-bttn\" (click)=\"showPlayers()\">Players</button>\n          <button class=\"nav-bttn\" (click)=\"showCharts()\">Charts</button>\n        </div>\n      </div>\n      <app-roster-table [players]=\"selectedPlayers\" *ngIf=\"arePlayersShowing\">\n      </app-roster-table>\n      <app-team-charts [players]=\"selectedPlayers\" *ngIf=\"areChartsShowing\">\n      </app-team-charts>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueBlock; });
var LeagueBlock = (function () {
    function LeagueBlock(id, title) {
        this.id = id;
        this.title = title;
    }
    LeagueBlock.prototype.getLogoUrl = function () {
        var filename = this.title.toLowerCase().replace(/ /g, '_');
        console.log(filename);
        return "/assets/league_logos/" + filename + ".png";
    };
    return LeagueBlock;
}());

//# sourceMappingURL=league-block.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamBlock; });
var TeamBlock = (function () {
    function TeamBlock() {
    }
    return TeamBlock;
}());

//# sourceMappingURL=team-block.model.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = (function () {
    function Team() {
    }
    return Team;
}());

//# sourceMappingURL=team.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.leagueBlocks = [
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](426, 'English Premier League'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](436, 'La Liga'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](438, 'Serie A'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](434, 'Ligue 1'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](430, 'Bundesliga')
        ];
        this.tourneyBlocks = [
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](426, 'UEFA Champions League'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](436, 'European Championship'),
            new __WEBPACK_IMPORTED_MODULE_3__components_league_block_league_block__["a" /* LeagueBlock */](434, 'FA Cup')
        ];
    };
    HomeComponent.prototype.onClicked = function (event) {
        this.router.navigate(["league/" + event,]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(220),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_league__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_table__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeagueComponent = (function () {
    function LeagueComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.table = new __WEBPACK_IMPORTED_MODULE_4__models_table__["a" /* Table */]();
        this.league = new __WEBPACK_IMPORTED_MODULE_3__models_league__["a" /* League */]();
        this.tabs = [{
                id: 0,
                name: 'Table',
                active: true,
                url: './'
            }, {
                id: 1,
                name: 'Teams',
                active: false,
                url: './teams'
            }, {
                id: 2,
                name: 'Fixtures',
                active: false,
                url: './fixtures'
            }];
    }
    LeagueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService
                .getTable(id)
                .then(function (table) {
                _this.table = table;
            });
            _this.dataService
                .getLeague(id)
                .then(function (league) { return _this.league = league; });
        });
    };
    LeagueComponent.prototype.navigate = function (event) {
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (tab.id === event) {
                tab.active = true;
                this.router.navigate([tab.url], { relativeTo: this.route });
            }
            else {
                tab.active = false;
            }
        }
        console.log(this.tabs);
    };
    return LeagueComponent;
}());
LeagueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-league',
        host: {
            class: 'content-container'
        },
        template: __webpack_require__(221),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LeagueComponent);

var _a, _b, _c;
//# sourceMappingURL=league.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService
                .getTable(id)
                .then(function (table) {
                _this.table = table;
            });
        });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__(222),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_team_block_team_block_model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsComponent = (function () {
    function TeamsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.teamBlocks = [];
        this.arePlayersShowing = true;
        this.areChartsShowing = false;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = params['id'];
            _this.dataService
                .getTeams(id)
                .then(function (teams) {
                _this.teams = teams.sort(function (obj1, obj2) {
                    if (obj1.name < obj2.name)
                        return -1;
                    else if (obj1.name > obj2.name)
                        return 1;
                    else
                        return 0;
                });
                for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
                    var team = teams_1[_i];
                    var block = new __WEBPACK_IMPORTED_MODULE_3__components_team_block_team_block_model__["a" /* TeamBlock */]();
                    block.team = team;
                    block.active = false;
                    _this.teamBlocks.push(block);
                }
            });
        });
    };
    TeamsComponent.prototype.teamSelected = function (id) {
        var _this = this;
        //TODO: Bind team id from selected object
        this.selectedTeamId = id;
        this.dataService
            .getTeam(this.selectedTeamId)
            .then(function (team) { return _this.selectedTeam = team; });
        this.dataService
            .getPlayers(this.selectedTeamId)
            .then(function (players) { return _this.selectedPlayers = players; });
        for (var _i = 0, _a = this.teamBlocks; _i < _a.length; _i++) {
            var team = _a[_i];
            if (team.team.id === id) {
                team.active = true;
            }
            else {
                team.active = false;
            }
        }
    };
    TeamsComponent.prototype.showPlayers = function () {
        this.arePlayersShowing = true;
        this.areChartsShowing = false;
    };
    TeamsComponent.prototype.showCharts = function () {
        this.arePlayersShowing = false;
        this.areChartsShowing = true;
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-teams',
        template: __webpack_require__(223),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], TeamsComponent);

var _a, _b;
//# sourceMappingURL=teams.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.bundle.js.map