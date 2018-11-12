webpackJsonp([0],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_page__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password_page__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(149);
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
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
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
        selector: 'as-page-login',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\login\login.page.html"*/'<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT - COM241<br>Aluno</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n<form (ngSubmit)="login()" [formGroup]="form">\n\n\n\n	<ion-list inset>\n\n\n\n		<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n			<ion-input type="text"  placeholder="Email" formControlName="email"></ion-input>\n\n		</ion-item>\n\n\n\n		<div ngxErrors="email" #emailErrors="ngxErrors">\n\n			<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Insira um email válido</div>\n\n		</div>\n\n\n\n		<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n			<ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n\n		</ion-item>\n\n\n\n		<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n			<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Deve ter pelo menos 5 caracteres</div>\n\n		</div>\n\n\n\n	</ion-list>\n\n\n\n	<div padding-horizontal>\n\n		<div class="form-error">{{loginError}}</div>\n\n\n\n		<button ion-button id="login-entrar" color="primary" block round type="submit" [disabled]="!form.valid">Entrar</button>\n\n		<div class="login-footer">\n\n			<button id="login-esqueceu" ion-button clear color="light" block small (click)="resetPassword()">\n\n				Esqueceu a senha?						\n\n			</button>\n\n			<p style="color:#FFFFFF; text-align: center;">\n\n				Se você é um novo usuário, inscreva-se.\n\n			</p>\n\n			<div class="spacer" style="width:300px;height:10px;" id="login-spacer1"></div>\n\n\n\n			<button id="login-button2" ion-button clear color="light" block small (click)="signup()">\n\n				<ion-icon name="person-add"></ion-icon>Crie uma conta						\n\n			</button>\n\n\n\n		</div>\n\n	</div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\login\login.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.page.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content padding>\n\n  <ion-content padding="true" class="has-header">\n\n    <h1 id="home-heading2" style="color:#20156B;font-weight:400;text-align:center;">Adminstração e Gerência de Redes COM241</h1>\n\n    <div id="home-markdown4" style="text-align:centera;" class="show-list-numbers-and-dots">\n\n      <p align="center"style="color:#000000;font-size:30px;">Seja Bem Vindo </p>\n\n\n\n      <p align="center" style="color:#000000;font-size:30px;">Aluno!!</p>\n\n    </div>\n\n    <div id="home-markdown5" style="text-align:center;" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;font-size:25px;">Aqui você encontrá o chat</p>\n\n\n\n      <p style="color:#000000;font-size:25px;">e os arquivos referentes </p>\n\n\n\n      <p style="color:#000000;font-size:25px;">a disciplina COM241</p>\n\n    </div>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\chataluno\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fazer_pergunta_fazer_pergunta__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerguntasPage = (function () {
    function PerguntasPage(navCtrl, navParams, af, data, nav, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.nav = nav;
        this.auth = auth;
        this.fb = fb;
        this.items$ = data.getPerguntas();
        this.items1$ = data.getAlunos();
    }
    PerguntasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerguntasPage');
    };
    PerguntasPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fazer_pergunta_fazer_pergunta__["a" /* FazerPerguntaPage */]);
    };
    return PerguntasPage;
}());
PerguntasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-perguntas',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\perguntas\perguntas.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Perguntas</ion-title>\n\n    <ion-buttons start>\n\n    <button ion-button icon-only (click)="add()">\n\n      <ion-icon name="create" ></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ng-container *ngFor="let item of items$ | async : true">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ng-container *ngFor="let item1 of items1$ | async : true">\n\n        <h2 *ngIf="item1.uid === item.uid">{{item1.nome}}</h2>\n\n        </ng-container>\n\n        <p>{{item.data}}</p>\n\n      </ion-item>\n\n      <ion-card-content>\n\n        <p>{{item.pergunta}}</p>\n\n      </ion-card-content>      \n\n    </ion-card>\n\n    \n\n  </ng-container>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\perguntas\perguntas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* FirebaseApp */]])
], PerguntasPage);

//# sourceMappingURL=perguntas.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(29);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__ = __webpack_require__(426);
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup1_signup1__ = __webpack_require__(283);
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
    function SignupPage(fb, navCtrl, auth, afi, af) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.afi = afi;
        this.af = af;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () {
            return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup1_signup1__["a" /* Signup1Page */]);
        }),
            function (error) { return _this.signupError = error.message; };
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-signup',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\signup\signup.page.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Criar Conta</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n	<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT <br>DA TURMA</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n\n		<ion-list inset>\n\n			<h4 style="color:#fff">Email:</h4>		\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text"  [(ngModel)]="email" name="email" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Digite um email válido</div>\n\n			</div>\n\n			<h4 style="color:#fff">Senha:</h4>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password"  [(ngModel)]="senha" name="senha" placeholder="Senha" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Deve ter pelo menos 6 caracteres</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button id="login-cadastrar" color="primary" block type="submit" [disabled]="!form.valid">Continuar</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\signup\signup.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], SignupPage);

//# sourceMappingURL=signup.page.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the Signup1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup1Page = (function () {
    function Signup1Page(fb, navCtrl, auth, afi, af) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.afi = afi;
        this.af = af;
        this.json = {
            nome: ' ',
            matricula: ' ',
            curso: ' ',
            uid: this.auth.getid(),
        };
        this.lista = this.af.list('/alunos');
    }
    Signup1Page.prototype.signup1 = function () {
        var _this = this;
        this.lista.push(this.json).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }),
            function (error) { return _this.signupError = error.message; };
    };
    return Signup1Page;
}());
Signup1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup1',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\signup1\signup1.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Continuar cadastro Conta</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n	<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT <br>DA TURMA</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n	<form (ngSubmit)="signup1()" >\n\n		<ion-list inset>\n\n			<h4 style="color:#fff">Nome:</h4>\n\n			<ion-item>				\n\n				<ion-input type="text" [(ngModel)]="json.nome" name="nome" placeholder="Nome" ></ion-input>\n\n			</ion-item>\n\n			<div class="spacer" style="width:300px;height:5px;"></div>\n\n			<h4 style="color:#fff">Matrícula:</h4>\n\n			<ion-item>					\n\n				<ion-input type="text"  [(ngModel)]="json.matricula" name="matricula" placeholder="Matricula" ></ion-input>\n\n			</ion-item>\n\n			<h4 style="color:#fff">Curso:</h4>\n\n			<div class="spacer" style="width:300px;height:5px;"></div>			\n\n			<ion-item id="denuncia15MinBanco-select10">\n\n        <ion-select name="curso"  [(ngModel)]="json.curso">           \n\n          <ion-option value="Ciência da Computação">\n\n            Ciência da Computação\n\n          </ion-option>    \n\n\n\n          <ion-option value="Sistemas de Informação">\n\n            Sistemas de Informação\n\n          </ion-option>      \n\n        </ion-select>\n\n  \n\n      </ion-item>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button id="login-cadastrar" color="primary" block type="submit" >Continuar</button>\n\n    </div>\n\n  </ion-list>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\signup1\signup1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], Signup1Page);

//# sourceMappingURL=signup1.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_page__ = __webpack_require__(148);
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
        selector: 'as-page-reset-password',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\reset-password\reset-password.page.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Lembrar Senha</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background:url(assets/img/bg1200.png) no-repeat center;background-size:cover;">\n\n\n\n	<div  style="color: #fff; font-size: 40px; margin-top: 30px; margin-bottom: 25px;" align="center">CHAT - COM241<br>Aluno</div>\n\n\n\n<div class="spacer" style="width:300px;height:5px;" id="login-spacer1"></div>\n\n\n\n<div>\n\n		<p style="color:#FFFFFF;">\n\n				Digite seu email para receber o link de alteração de senha\n\n		</p>\n\n</div>\n\n	<form (ngSubmit)="resetPassword()" [formGroup]="form">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Insira um email válido</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n\n\n			<button ion-button full [disabled]="!form.valid">Enviar</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\reset-password\reset-password.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.page.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
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
        this.usuario = this.auth.getid();
        this.items$ = data.getPerfil();
        this.messages$ = data.getChatMessages();
        this.items1$ = data.getAlunos();
    }
    ChatMessagesPage.prototype.send = function (message) {
        this.messages$.push({
            createdAt: new Date().toLocaleString(),
            from: this.auth.getid(),
            text: message
        });
    };
    return ChatMessagesPage;
}());
ChatMessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'as-page-chat-messages',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\chat\chat-messages.page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Chat</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list text-wrap>\n\n		<ng-container *ngFor="let message of (messages$ | async) ">\n\n		<ion-item style="background:aquamarine" *ngIf="(message.from === usuario)">\n\n			<h2 align="right"><strong>Você</strong></h2>\n\n			<h3 align="right">{{message.text}}</h3>\n\n			<h6 style="font-size: 10px; color: gray" align="left">{{message.createdAt}}</h6>\n\n		</ion-item>\n\n		<ion-item  style="background:bisque" *ngIf="(message.from !== usuario)">\n\n				<ng-container *ngIf="message.from !== M7dBqkH1fIX9v7c9joFfTdNYB312; then professor; else aluno">\n\n				</ng-container>\n\n				<ng-template #professor>\n\n					<h2 align="left"><strong>Professor Bruno Guazzeli Batista</strong></h2>\n\n					<h3 align="left">{{message.text}}</h3>\n\n					<h6 style="font-size: 10px; color: gray" align="right">{{message.createdAt}}</h6>\n\n				</ng-template>\n\n				<ng-template #aluno>\n\n					<ng-container *ngFor="let item1 of items1$ | async : true">\n\n						<h2 *ngIf="item1.uid === message.from" align="left"><strong>Aluno {{item1.nome}}</strong></h2>\n\n						</ng-container>					\n\n						<h3 align="left">{{message.text}}</h3>\n\n						<h6 style="font-size: 10px; color: gray" align="right">{{message.createdAt}}</h6>\n\n				</ng-template>\n\n			</ion-item>	\n\n		</ng-container>\n\n	</ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar>\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col>\n\n					<ion-input placeholder="Digite sua mensagem" #input [disabled]="!auth.authenticated"></ion-input>\n\n				</ion-col>\n\n				<ion-col col-auto>\n\n					<button ion-button clear (click)="send(input.value); input.value = \'\';" [disabled]="!input.value || !auth.authenticated">Enviar</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\pages\chat\chat-messages.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], ChatMessagesPage);

//# sourceMappingURL=chat-messages.page.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FazerPerguntaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perguntas_perguntas__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FazerPerguntaPage = (function () {
    function FazerPerguntaPage(alertCtrl, af, data, navCtrl, navParams, auth) {
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.data = new Date().toLocaleDateString();
        this.json = {
            assunto: '',
            pergunta: '',
            uid: this.auth.getid(),
            username: this.auth.getName(),
            useremail: this.auth.getEmail(),
            data: this.data,
            resposta: '',
        };
        this.lista = this.af.list('/perguntas');
        this.value = this.af.object('/perguntas/');
    }
    FazerPerguntaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FazerPerguntaPage');
    };
    FazerPerguntaPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Mensagem de confimação',
            subTitle: 'Sua pergunta foi enviada com sucesso!',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perguntas_perguntas__["a" /* PerguntasPage */]);
    };
    FazerPerguntaPage.prototype.cadastrar = function () {
        var _this = this;
        this.lista.push(this.json).then(function () {
            _this.presentAlert();
        });
    };
    FazerPerguntaPage.prototype.updateValue = function (data) {
        this.value.update(data).then(function (_) { return console.log('update!'); });
    };
    return FazerPerguntaPage;
}());
FazerPerguntaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-fazer-pergunta',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\fazer-pergunta\fazer-pergunta.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>Fazer pergunta</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-content padding="true" class="has-header">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Assunto</ion-label>\n\n        <ion-input  [(ngModel)]="json.assunto" name="assunto" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked>Pergunta</ion-label>\n\n        <ion-input [(ngModel)]="json.pergunta" name="pergunta" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n    </ion-list>\n\n    <button ion-button (click)="cadastrar()" >Enviar pergunta</button>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\chataluno\src\pages\fazer-pergunta\fazer-pergunta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
], FazerPerguntaPage);

//# sourceMappingURL=fazer-pergunta.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, af, data, nav, auth, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.nav = nav;
        this.auth = auth;
        this.fb = fb;
        this.uid = this.auth.getid();
        this.items$ = data.getPerfil();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\perfil\perfil.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-content padding="true" class="has-header">\n\n    <ng-container *ngFor="let item of items$ | async : true">\n\n    <div *ngIf="(item.uid===uid)" class="list card" id="perfil-card27">\n\n      <ion-item class="item-avatar" id="perfil-list-item17">\n\n        <h2>Nome</h2>\n\n        <p>{{item.nome}}</p>\n\n      </ion-item>\n\n      <ion-item class="item-avatar" id="perfil-list-item17">\n\n          <h2>Numero de matrícula</h2>\n\n          <p>{{item.matricula}}</p>\n\n        </ion-item>\n\n        <ion-item class="item-avatar" id="perfil-list-item17">\n\n            <h2>Curso</h2>\n\n            <p>{{item.curso}}</p>\n\n          </ion-item>\n\n    </div>\n\n  </ng-container>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\chataluno\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* FirebaseApp */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(305);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_custom_components_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reset_password_reset_password_page__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_base64__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perguntas_perguntas__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_fazer_pergunta_fazer_pergunta__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ver_pergunta_ver_pergunta__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_home__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_signup1_signup1__ = __webpack_require__(283);
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
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_reset_password_reset_password_page__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_perguntas_perguntas__["a" /* PerguntasPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_fazer_pergunta_fazer_pergunta__["a" /* FazerPerguntaPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_ver_pergunta_ver_pergunta__["a" /* VerPerguntaPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_signup1_signup1__["a" /* Signup1Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__config__["a" /* config */].fire),
            __WEBPACK_IMPORTED_MODULE_4__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_custom_components_module__["a" /* CustomComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat_module__["a" /* ChatModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_page__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_page__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_reset_password_reset_password_page__["a" /* ResetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_fazer_pergunta_fazer_pergunta__["a" /* FazerPerguntaPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_ver_pergunta_ver_pergunta__["a" /* VerPerguntaPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_signup1_signup1__["a" /* Signup1Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_perguntas_perguntas__["a" /* PerguntasPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_base64__["a" /* Base64 */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__ = __webpack_require__(427);
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
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_avatar_component__["a" /* AvatarComponent */]]
    })
], CustomComponentsModule);

//# sourceMappingURL=custom-components.module.js.map

/***/ }),

/***/ 424:
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

/***/ 425:
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

/***/ 426:
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

/***/ 427:
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

/***/ 428:
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_page__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat_messages_page__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perguntas_perguntas__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(287);
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
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */], icon: 'contact' },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat_messages_page__["a" /* ChatMessagesPage */], icon: 'chatboxes' },
            { title: 'Perguntas', component: __WEBPACK_IMPORTED_MODULE_6__pages_perguntas_perguntas__["a" /* PerguntasPage */], icon: 'help' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login_page__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login_page__["a" /* LoginPage */]);
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login_page__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\chataluno\src\app\app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n\n	<ion-header>\n\n		<ion-toolbar>\n\n				<ion-title class="titleicon" style="display:inline-block; margin-top: 15px" >COM241 - Aluno</ion-title>\n\n		</ion-toolbar>\n\n	</ion-header>\n\n	\n\n	<ion-content>\n\n		<ion-list>\n\n			<ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n				<ion-icon [name]="p.icon" item-left color="primary"></ion-icon>\n\n				{{p.title}}\n\n			</ion-item>\n\n\n\n			<ion-list-header *ngIf="auth.getEmail()">{{auth.getEmail()}}</ion-list-header>\n\n\n\n			<ion-item (click)="logout()" *ngIf="auth.authenticated">\n\n				<ion-icon name="log-out" item-left></ion-icon>\n\n				Sair\n\n			</ion-item>\n\n\n\n			<ion-item (click)="login()" *ngIf="!auth.authenticated">\n\n				<ion-icon name="log-in" item-left></ion-icon>\n\n				Logar\n\n			</ion-item>\n\n		</ion-list>\n\n	</ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\ionic\chataluno\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_messages_page__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_3__chat_messages_page__["a" /* ChatMessagesPage */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__chat_messages_page__["a" /* ChatMessagesPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerPerguntaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VerPerguntaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VerPerguntaPage = (function () {
    function VerPerguntaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VerPerguntaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerPerguntaPage');
    };
    return VerPerguntaPage;
}());
VerPerguntaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-ver-pergunta',template:/*ion-inline-start:"C:\ionic\chataluno\src\pages\ver-pergunta\ver-pergunta.html"*/'<ion-content class="view-class">\n\n\n\n  <ion-content padding="true" class="has-header">\n\n    <div class="list card" id="perguntas2-card22">\n\n      <ion-item class="item-icon-left" id="perguntas2-list-item8">\n\n        <i class="icon ion-android-send"></i>Assunto: Protocolo Http</ion-item>\n\n      <div class="spacer" style="width: 300px; height: 13px;"></div>\n\n      <div id="perguntas2-markdown13" class="show-list-numbers-and-dots">\n\n        <p style="color:#000000;font-size:20px;">Com funciona o protocolo HTTP?</p>\n\n      </div>\n\n      <div id="perguntas2-markdown14" style="text-align:right;" class="show-list-numbers-and-dots">\n\n        <p style="color:#000000;">Igor Gouveia de Oliveira - 2017013821</p>\n\n      </div>\n\n      <ion-item class="item-icon-left item-icon-right" id="perguntas2-list-item9">\n\n        <i class="icon No Icon"></i>\n\n        <span class="item-note">Resposta</span>\n\n        <i class="icon ion-reply"></i>\n\n      </ion-item>\n\n      <div id="perguntas2-markdown15" class="show-list-numbers-and-dots">\n\n        <p style="color:#000000;font-size:18px;">O protocolo HTTP é baseado em requisições e respostas entre clientes e servidores. O cliente — navegador ou dispositivo que fará a requisição; também é conhecido como user agent — solicita um determinado recurso (resource), enviando um pacote\n\n          de informações contendo alguns cabeçalhos (headers) a um URI ou, mais especificamente, URL. O servidor recebe estas informações e envia uma resposta, que pode ser um recurso ou um simplesmente um outro cabeçalho.</p>\n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\chataluno\src\pages\ver-pergunta\ver-pergunta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], VerPerguntaPage);

//# sourceMappingURL=ver-pergunta.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(39);
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
    DataService.prototype.getPerfil = function () {
        return this.db.list('alunos');
    };
    DataService.prototype.getChatMessages = function () {
        return this.db.list("turmas/568b73d9-54b6-f392-bb5f-ddc4e779d1e0/messages");
    };
    DataService.prototype.getPerguntas = function () {
        return this.db.list('perguntas');
    };
    DataService.prototype.getAlunos = function () {
        return this.db.list('alunos');
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map