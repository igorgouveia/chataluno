webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_page__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password_page__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.form.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.loginWithGithub = function () {
        var _this = this;
        this.auth.signInWithGitHub()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.loginWithTwitter = function () {
        var _this = this;
        this.auth.signInWithTwitter()
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return console.log(error.message); });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup_page__["a" /* SignupPage */]);
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password_page__["a" /* ResetPasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-login',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\login\login.page.html"*/'<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT <br>DA TURMA</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n<form (ngSubmit)="login()" [formGroup]="form">\n\n\n\n	<ion-list inset>\n\n\n\n		<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n			<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n		</ion-item>\n\n\n\n		<div ngxErrors="email" #emailErrors="ngxErrors">\n\n			<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Insira um email válido</div>\n\n		</div>\n\n\n\n		<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n			<ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n\n		</ion-item>\n\n\n\n		<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n			<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Deve ter pelo menos 5 caracteres</div>\n\n		</div>\n\n\n\n	</ion-list>\n\n\n\n	<div padding-horizontal>\n\n		<div class="form-error">{{loginError}}</div>\n\n\n\n		<button ion-button id="login-entrar" color="primary" block round type="submit" [disabled]="!form.valid">Entrar</button>\n\n		<div class="login-footer">\n\n			<button id="login-esqueceu" ion-button clear color="light" block small (click)="resetPassword()">\n\n				Esqueceu a senha?						\n\n			</button>\n\n			<p style="color:#FFFFFF; text-align: center;">\n\n				Se você é um novo usuário, inscreva-se.\n\n			</p>\n\n			<div class="spacer" style="width:300px;height:10px;" id="login-spacer1"></div>\n\n\n\n			<button id="login-button2" ion-button clear color="light" block small (click)="signup()">\n\n				<ion-icon name="person-add"></ion-icon>Crie uma conta						\n\n			</button>\n\n\n\n		</div>\n\n	</div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\login\login.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.page.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessagesPage = (function () {
    function ChatMessagesPage(navParams, data, auth) {
        this.auth = auth;
        this.usuario = this.auth.getName();
        this.messages$ = data.getChatMessages();
    }
    ChatMessagesPage.prototype.send = function (message) {
        this.messages$.push({
            createdAt: new Date().toLocaleString(),
            from: this.auth.getName(),
            text: message
        });
    };
    return ChatMessagesPage;
}());
ChatMessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-chat-messages',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\chat\chat-messages.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>{{title}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list text-wrap>\n\n		<ng-container *ngFor="let message of (messages$ | async) ">\n\n		<ion-item style="background:aquamarine" *ngIf="(message.from === usuario)">\n\n			<h2 align="right"><strong>Você</strong></h2>\n\n			<h3 align="right">{{message.text}}</h3>\n\n			<h6 style="font-size: 10px; color: gray" align="left">{{message.createdAt}}</h6>\n\n		</ion-item>\n\n		<ion-item  style="background:bisque" *ngIf="(message.from !== usuario)">\n\n				<h2 align="left"><strong>{{message.from}}</strong></h2>\n\n				<h3 align="left">{{message.text}}</h3>\n\n				<h6 style="font-size: 10px; color: gray" align="right">{{message.createdAt | date : \'short\'}}</h6>\n\n			</ion-item>\n\n		</ng-container>\n\n	</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar>\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col>\n\n					<ion-input placeholder="Digite sua mensagem" #input [disabled]="!auth.authenticated"></ion-input>\n\n				</ion-col>\n\n				<ion-col col-auto>\n\n					<button ion-button clear (click)="send(input.value); input.value = \'\';" [disabled]="!input.value || !auth.authenticated">Enviar</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\chat\chat-messages.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], ChatMessagesPage);

//# sourceMappingURL=chat-messages.page.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CustomComponentsModule = (function () {
    function CustomComponentsModule() {
    }
    return CustomComponentsModule;
}());
CustomComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]]
    })
], CustomComponentsModule);

//# sourceMappingURL=custom-components.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_rooms_page__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            matricula: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            nome: data.nome,
            matricula: data.matricula,
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__chat_chat_rooms_page__["a" /* ChatRoomsPage */]); }, function (error) { return _this.signupError = error.message; });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-signup',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\signup\signup.page.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Criar Conta</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n	<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT <br>DA TURMA</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n\n		<ion-list inset>\n\n			<ion-item>\n\n				<ion-input type="text" placeholder="Nome" formControlName="nome"></ion-input>\n\n			</ion-item>\n\n			<div class="spacer" style="width:300px;height:5px;"></div>\n\n			\n\n			<ion-item>\n\n				<ion-input type="text" placeholder="Matricula" formControlName="matricula"></ion-input>\n\n			</ion-item>\n\n			<div class="spacer" style="width:300px;height:5px;"></div>\n\n			\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Digite um email válido</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Deve ter pelo menos 6 caracteres</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button id="login-cadastrar" color="primary" block type="submit" [disabled]="!form.valid">Cadastrar</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\signup\signup.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], SignupPage);

//# sourceMappingURL=signup.page.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_page__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = (function () {
    function ResetPasswordPage(fb, navCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])]
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        var data = this.form.value;
        this.auth.resetPassword(data.email)
            .then(function () {
            _this.toastCtrl.create({
                message: 'Check your email for further instructions',
                duration: 3000,
                position: 'bottom'
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login_page__["a" /* LoginPage */]);
        }, function (error) { return _this.signupError = error.message; });
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-reset-password',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\reset-password\reset-password.page.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Lembrar Senha</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n	<img src="assets/img/logo_procon_voce.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n<div>\n\n		<p style="color:#FFFFFF;">\n\n				Digite seu email para receber o link de alteração de senha\n\n		</p>\n\n</div>\n\n	<form (ngSubmit)="resetPassword()" [formGroup]="form">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Insira um email válido</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n\n\n			<button ion-button full [disabled]="!form.valid">Enviar</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\reset-password\reset-password.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.page.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_call_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_in_app_browser_service__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfilePage = (function () {
    function UserProfilePage(navParams, emailService, callService, browserService) {
        this.emailService = emailService;
        this.callService = callService;
        this.browserService = browserService;
        this.item = navParams.get('item');
    }
    UserProfilePage.prototype.sendEmail = function () {
        var email = {
            to: this.item.email,
            subject: 'Meeting request',
            body: 'I would like to arrange a meeting with you.'
        };
        this.emailService.sendEmail(email);
    };
    UserProfilePage.prototype.openPage = function () {
        this.browserService.open(this.item.webpage);
    };
    UserProfilePage.prototype.openLinkedIn = function () {
        this.browserService.open(this.item.linkedIn);
    };
    UserProfilePage.prototype.call = function () {
        this.callService.call(this.item.phoneNumber);
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\user-profiles\user-profile.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>{{item.title}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div padding text-center class="avatar-wrapper">\n\n		<as-avatar [user]="item" [size]="\'big\'"></as-avatar>\n\n	</div>\n\n\n\n	<div text-center>\n\n		<h3>{{item.firstName}} {{item.lastName}}</h3>\n\n		<p>{{item.title}}, {{item.email}}</p>\n\n	</div>\n\n\n\n	<div padding>\n\n		<div padding-top *ngIf="!!item.bio">\n\n			<h6>Biography</h6>\n\n			<p>{{item.bio}}</p>\n\n		</div>\n\n\n\n		<div padding-top>{{item.address}}</div>\n\n	</div>\n\n\n\n	<ion-card>\n\n		<ion-card-header>Contact</ion-card-header>\n\n\n\n		<ion-list>\n\n			<button ion-item (click)="call()">\n\n				<ion-icon name="call" item-left></ion-icon> Phone\n\n			</button>\n\n\n\n			<button ion-item (click)="sendEmail()">\n\n				<ion-icon name="mail" item-left></ion-icon> Email\n\n			</button>\n\n\n\n			<button ion-item (click)="openLinkedIn()">\n\n				<ion-icon name="logo-linkedin" item-left></ion-icon> Linked In\n\n			</button>\n\n\n\n			<button ion-item (click)="openPage()">\n\n				<ion-icon name="globe" item-left></ion-icon> Webpage\n\n			</button>\n\n		</ion-list>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\user-profiles\user-profile.page.html"*/,
        selector: 'as-page-user-profile'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */],
        __WEBPACK_IMPORTED_MODULE_2__services_call_service__["a" /* CallService */],
        __WEBPACK_IMPORTED_MODULE_4__services_in_app_browser_service__["a" /* InAppBrowserService */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.page.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(302);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_custom_components_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_user_profiles_user_profiles_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password_page__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__ = __webpack_require__(438);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password_page__["a" /* ResetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__config__["a" /* config */].fire),
            __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_custom_components_module__["a" /* CustomComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_15__pages_user_profiles_user_profiles_module__["a" /* UserProfilesModules */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat_module__["a" /* ChatModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_reset_password_reset_password_page__["a" /* ResetPasswordPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__["a" /* Base64 */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TilesComponent = (function () {
    function TilesComponent() {
        this.itemTapped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.columns = 2;
        this.itemGroups = [];
    }
    TilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var line = [];
        this.items.forEach(function (item) {
            line.push(item);
            if (line.length === _this.columns) {
                _this.itemGroups.push(line);
                line = [];
            }
        });
        if (line.length) {
            this.itemGroups.push(line);
        }
    };
    TilesComponent.prototype.itemClicked = function (item) {
        this.itemTapped.emit(item);
    };
    return TilesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TilesComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TilesComponent.prototype, "itemTapped", void 0);
TilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tiles',template:/*ion-inline-start:"C:\ionic\chataluno\src\components\tiles\tiles.html"*/'<ion-row *ngFor="let group of itemGroups">\n\n	<ion-col no-padding col-6 *ngFor="let item of group">\n\n		<ion-card *ngIf="!item.price" (click)="itemClicked(item)">\n\n			<ion-card-header>{{item.title}}</ion-card-header>\n\n			<div *ngIf="!!item.thumb">\n\n				<img src="{{item.thumb[0].url}}">\n\n			</div>\n\n		</ion-card>\n\n\n\n		<ion-card *ngIf="item.price" (click)="itemClicked(item)">\n\n			<div *ngIf="!!item.thumb">\n\n				<img src="{{item.thumb[0].url}}">\n\n			</div>\n\n			<ion-item>\n\n				<h2>{{item.title}}</h2>\n\n				<h4 *ngIf="!item.price.concat">{{item.price | currency:\'USD\':true}}</h4>\n\n				<h4 *ngIf="item.price.concat">{{item.price[0].value | currency:\'USD\':true}}</h4>\n\n			</ion-item>\n\n		</ion-card>\n\n	</ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\components\tiles\tiles.html"*/
    })
], TilesComponent);

//# sourceMappingURL=tiles.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, '');
    };
    return TrimHtmlPipe;
}());
TrimHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'trimHtml'
    })
], TrimHtmlPipe);

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit) {
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = (function () {
    function AvatarComponent() {
        this.size = 'small';
    }
    Object.defineProperty(AvatarComponent.prototype, "hasImage", {
        get: function () {
            return this.user.avatar && this.user.avatar[0] && !!this.user.avatar[0].url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvatarComponent.prototype, "initials", {
        get: function () {
            return (this.user.firstName[0] + this.user.lastName[0]).toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return AvatarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AvatarComponent.prototype, "size", void 0);
AvatarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-avatar',template:/*ion-inline-start:"C:\ionic\chataluno\src\components\avatar\avatar.component.html"*/'<div class="{{ size === \'big\' ? \'big\' : \'small\' }}">\n\n	<div *ngIf="!hasImage" class="initials">{{initials}}</div>\n\n	<img *ngIf="hasImage" src="{{user.avatar[0].url}}">\n\n</div>'/*ion-inline-end:"C:\ionic\chataluno\src\components\avatar\avatar.component.html"*/
    })
], AvatarComponent);

//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    // TODO: Replace the values for the keys that follow. Check the documentation.
    fire: {
        apiKey: 'AIzaSyBsrdWrg63XDO88aosVsnkFwTt5R-H0DHE',
        authDomain: 'chatdaturma-92382.firebaseapp.com',
        databaseURL: 'https://chatdaturma-92382.firebaseio.com',
        projectId: 'chatdaturma-92382',
        storageBucket: 'chatdaturma-92382.appspot.com',
        messagingSenderId: '856909837897'
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesModules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_page__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profiles_page__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_custom_components_module__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserProfilesModules = (function () {
    function UserProfilesModules() {
    }
    return UserProfilesModules;
}());
UserProfilesModules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__user_profiles_page__["a" /* UserProfilesPage */], __WEBPACK_IMPORTED_MODULE_3__user_profile_page__["a" /* UserProfilePage */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__user_profiles_page__["a" /* UserProfilesPage */], __WEBPACK_IMPORTED_MODULE_3__user_profile_page__["a" /* UserProfilePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_5__components_custom_components_module__["a" /* CustomComponentsModule */]]
    })
], UserProfilesModules);

//# sourceMappingURL=user-profiles.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallService = (function () {
    function CallService() {
    }
    CallService.prototype.call = function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    };
    return CallService;
}());
CallService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CallService);

//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Email = (function () {
    function Email() {
    }
    return Email;
}());

var EmailService = (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        var plugins = window.cordova.plugins;
        plugins.email.isAvailable(function () {
            plugins.email.open(email);
        });
    };
    return EmailService;
}());
EmailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EmailService);

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InAppBrowserService = (function () {
    function InAppBrowserService() {
    }
    InAppBrowserService.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    return InAppBrowserService;
}());
InAppBrowserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], InAppBrowserService);

//# sourceMappingURL=in-app-browser.service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_page__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfilesPage = (function () {
    function UserProfilesPage(data, nav) {
        this.nav = nav;
        this.items$ = data.getUserProfiles();
    }
    UserProfilesPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__user_profile_page__["a" /* UserProfilePage */], {
            item: item
        });
    };
    return UserProfilesPage;
}());
UserProfilesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\user-profiles\user-profiles.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		 <button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>User</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list text-wrap>\n\n		<ion-item *ngFor="let item of items$ | async" (click)="itemTapped(item)">\n\n			<ion-avatar item-left>\n\n				<as-avatar [user]="item"></as-avatar>\n\n			</ion-avatar>\n\n			<h2>{{item.firstName}} {{item.lastName}}</h2>\n\n			<p>{{item.title}}</p>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\user-profiles\user-profiles.page.html"*/,
        selector: 'as-page-user-profiles'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], UserProfilesPage);

//# sourceMappingURL=user-profiles.page.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat_rooms_page__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_page__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat_messages_page__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(app, platform, menu, statusBar, auth) {
        this.statusBar = statusBar;
        this.auth = auth;
        this.menu = menu;
        this.app = app;
        this.platform = platform;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat_rooms_page__["a" /* ChatRoomsPage */], icon: 'contact' },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat_messages_page__["a" /* ChatMessagesPage */], icon: 'chatboxes' },
            { title: 'Arquivos', component: __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat_rooms_page__["a" /* ChatRoomsPage */], icon: 'search' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_chat_chat_rooms_page__["a" /* ChatRoomsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login_page__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login_page__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login_page__["a" /* LoginPage */]);
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login_page__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\chataluno\src\app\app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n\n	<ion-header>\n\n		<ion-toolbar>\n\n				<ion-title class="titleicon" style="display:inline-block; margin-top: 15px" >CHAT DA TURMA</ion-title>\n\n		</ion-toolbar>\n\n	</ion-header>\n\n	\n\n	<ion-content>\n\n		<ion-list>\n\n			<ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n				<ion-icon [name]="p.icon" item-left color="primary"></ion-icon>\n\n				{{p.title}}\n\n			</ion-item>\n\n\n\n			<ion-list-header *ngIf="auth.getEmail()">{{auth.getEmail()}}</ion-list-header>\n\n\n\n			<ion-item (click)="logout()" *ngIf="auth.authenticated">\n\n				<ion-icon name="log-out" item-left></ion-icon>\n\n				Sair\n\n			</ion-item>\n\n\n\n			<ion-item (click)="login()" *ngIf="!auth.authenticated">\n\n				<ion-icon name="log-in" item-left></ion-icon>\n\n				Logar\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_rooms_page__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_messages_page__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__chat_rooms_page__["a" /* ChatRoomsPage */], __WEBPACK_IMPORTED_MODULE_4__chat_messages_page__["a" /* ChatMessagesPage */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__chat_rooms_page__["a" /* ChatRoomsPage */], __WEBPACK_IMPORTED_MODULE_4__chat_messages_page__["a" /* ChatMessagesPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_5_ng2_order_pipe__["Ng2OrderModule"]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.getName = function () {
        return this.user && (this.user.displayName || this.getUsername());
    };
    AuthService.prototype.getUsername = function () {
        var email = this.getEmail() || '';
        var indexOfAt = email.indexOf('@');
        return indexOfAt > 0 ? email.substring(0, indexOfAt) : 'Anonymous';
    };
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getid = function () {
        return this.authenticated ? this.user.uid : '';
    };
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Entrou com email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGitHub = function () {
        console.log('Entrou com git hub');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        console.log('Entrou com facebook');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Entrou com google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithTwitter = function () {
        console.log('Entrou com twitter');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_messages_page__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRoomsPage = (function () {
    function ChatRoomsPage(data, nav) {
        this.nav = nav;
        this.items$ = data.getChatRooms();
    }
    ChatRoomsPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__chat_messages_page__["a" /* ChatMessagesPage */], {
            item: item
        });
    };
    return ChatRoomsPage;
}());
ChatRoomsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-chat-rooms',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\chat\chat-rooms.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		 <button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Minhas turmas</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list text-wrap>\n\n		<ion-item *ngFor="let item of items$ | async" (click)="itemTapped(item)">\n\n			<ion-icon [name]="item.icon" item-left></ion-icon> {{item.title}}\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\chat\chat-rooms.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ChatRoomsPage);

//# sourceMappingURL=chat-rooms.page.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(169);
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
    function DataService(db) {
        this.db = db;
    }
    DataService.prototype.getUserProfiles = function () {
        return this.db.list('usuario');
    };
    DataService.prototype.getChatRooms = function () {
        return this.db.list('turmas');
    };
    DataService.prototype.getChatMessages = function () {
        return this.db.list("turmas/568b73d9-54b6-f392-bb5f-ddc4e779d1e0/messages");
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map