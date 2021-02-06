(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/kevinliu/Documents/GitHub/pencil/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!***********************!*\
      !*** jsdom (ignored) ***!
      \***********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!********************************************************!*\
      !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!***************************************!*\
      !*** jsdom/lib/jsdom/utils (ignored) ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "5NYV":
    /*!**************************************************************************!*\
      !*** ./src/app/paint/toolbar/colour-palette/colour-palette.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ColourPaletteComponent */

    /***/
    function NYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColourPaletteComponent", function () {
        return ColourPaletteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _event_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../event-handler.service */
      "Uy/s");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models */
      "TbR9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "selected": a0
        };
      };

      function ColourPaletteComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColourPaletteComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var colour_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSelect(colour_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colour_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, colour_r1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, colour_r1 === ctx_r0.selectedColour));
        }
      }

      var ColourPaletteComponent = /*#__PURE__*/function () {
        function ColourPaletteComponent(fabricService) {
          _classCallCheck(this, ColourPaletteComponent);

          this.fabricService = fabricService;
          this.colours = Object.values(_models__WEBPACK_IMPORTED_MODULE_2__["DrawingColours"]);
          this.selectedColour = fabricService.selectedColour;
        }

        _createClass(ColourPaletteComponent, [{
          key: "onSelect",
          value: function onSelect(colour) {
            this.fabricService.selectedColour = colour;
            this.selectedColour = this.fabricService.selectedColour;
          }
        }]);

        return ColourPaletteComponent;
      }();

      ColourPaletteComponent.ɵfac = function ColourPaletteComponent_Factory(t) {
        return new (t || ColourPaletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_event_handler_service__WEBPACK_IMPORTED_MODULE_1__["EventHandlerService"]));
      };

      ColourPaletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColourPaletteComponent,
        selectors: [["app-colour-palette"]],
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "container"], ["class", "colour-picker ml-1 mb-1", 3, "ngStyle", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "colour-picker", "ml-1", "mb-1", 3, "ngStyle", "ngClass", "click"]],
        template: function ColourPaletteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColourPaletteComponent_div_1_Template, 1, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colours);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.colour-picker[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #9f9f9f;\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  outline: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnQvdG9vbGJhci9jb2xvdXItcGFsZXR0ZS9jb2xvdXItcGFsZXR0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFpbnQvdG9vbGJhci9jb2xvdXItcGFsZXR0ZS9jb2xvdXItcGFsZXR0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbG91ci1waWNrZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU5LCAxNTksIDE1OSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColourPaletteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-colour-palette',
            templateUrl: './colour-palette.component.html',
            styleUrls: ['./colour-palette.component.scss']
          }]
        }], function () {
          return [{
            type: _event_handler_service__WEBPACK_IMPORTED_MODULE_1__["EventHandlerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8748":
    /*!******************************************************!*\
      !*** ./src/app/shared/routing/app-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/sign-in/sign-in.component */
      "UR1+");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/sign-up/sign-up.component */
      "ujIQ");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/forgot-password/forgot-password.component */
      "nAxv");
      /* harmony import */


      var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/verify-email/verify-email.component */
      "TC++");
      /* harmony import */


      var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/guard/auth.guard */
      "eRTK");

      var routes = [{
        path: '',
        redirectTo: '/sign-in',
        pathMatch: 'full'
      }, {
        path: 'sign-in',
        component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]
      }, {
        path: 'register-user',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
      }, {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'forgot-password',
        component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]
      }, {
        path: 'verify-email-address',
        component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        firebase: {
          apiKey: "AIzaSyCp99gYJkm02yOOHdcWPBdY86bD15cSxqw",
          authDomain: "pencil-78cb2.firebaseapp.com",
          projectId: "pencil-78cb2",
          storageBucket: "pencil-78cb2.appspot.com",
          messagingSenderId: "572002608489",
          appId: "1:572002608489:web:3a75a982a5dc9a381bc9f8",
          measurementId: "G-D321623C6N"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Gs5J":
    /*!******************************************!*\
      !*** ./src/app/paint/paint.component.ts ***!
      \******************************************/

    /*! exports provided: PaintComponent */

    /***/
    function Gs5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaintComponent", function () {
        return PaintComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fabric-canvas/fabric-canvas.component */
      "rj5F");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "iobc");

      var PaintComponent = function PaintComponent() {
        _classCallCheck(this, PaintComponent);

        this.imageDataURL = 'assets/background.jpeg';
      };

      PaintComponent.ɵfac = function PaintComponent_Factory(t) {
        return new (t || PaintComponent)();
      };

      PaintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaintComponent,
        selectors: [["app-paint"]],
        decls: 5,
        vars: 1,
        consts: [[1, "d-flex", "ml-0", "mr-0"], [3, "imageDataURL"], [1, "width-200"]],
        template: function PaintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fabric-canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-graphical-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageDataURL", ctx.imageDataURL);
          }
        },
        directives: [_fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_1__["FabricCanvasComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["GraphicalToolbarComponent"]],
        styles: [".width-200[_ngcontent-%COMP%] {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnQvcGFpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWludC9wYWludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aC0yMDAge1xuICB3aWR0aDogNDAwcHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-paint',
            templateUrl: './paint.component.html',
            styleUrls: ['./paint.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afs, // Inject Firebase auth service
        router, ngZone // NgZone service to remove outside scope warning
        ) {
          var _this = this;

          _classCallCheck(this, AuthService);

          this.afs = afs;
          this.router = router;
          this.ngZone = ngZone;
          /* Saving user data in localstorage when
          logged in and setting up null when logged out */

          this.afAuth = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]();
          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              _this.userData = user;
              localStorage.setItem('user', JSON.stringify(_this.userData));
              JSON.parse(localStorage.getItem('user'));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          });
        }

        _createClass(AuthService, [{
          key: "SaveCanvas",
          value: function SaveCanvas(data) {
            if (isJson(data)) {
              firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(this.userData.uid).set(data);
            }
          }
        }, {
          key: "LoadCanvas",
          value: function LoadCanvas() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user, snapshot, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                      _context.next = 3;
                      return firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(user.uid).once('value');

                    case 3:
                      snapshot = _context.sent;
                      data = snapshot.val();

                      if (!isJson(data)) {
                        _context.next = 9;
                        break;
                      }

                      return _context.abrupt("return", data);

                    case 9:
                      JSON.stringify({
                        'base64': data
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          } // Sign in with email/password

        }, {
          key: "SignIn",
          value: function SignIn(email, password) {
            var _this2 = this;

            return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
              window.alert("sucess");

              _this2.ngZone.run(function () {
                _this2.router.navigate(['dashboard']);
              });

              _this2.SetUserData(result.user);
            })["catch"](function (error) {
              window.alert(error.message);
            });
          } // Sign up with email/password

        }, {
          key: "SignUp",
          value: function SignUp(email, password) {
            var _this3 = this;

            return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
              /* Call the SendVerificaitonMail() function when new user sign
              up and returns promise */
              _this3.SendVerificationMail();

              _this3.SetUserData(result.user);
            })["catch"](function (error) {
              window.alert(error.message);
            });
          } // Send email verfificaiton when new user sign up

        }, {
          key: "SendVerificationMail",
          value: function SendVerificationMail() {
            var _this4 = this;

            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification().then(function () {
              _this4.router.navigate(['verify-email-address']);
            });
          } // Reset Forggot password

        }, {
          key: "ForgotPassword",
          value: function ForgotPassword(passwordResetEmail) {
            return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
              window.alert('Password reset email sent, check your inbox.');
            })["catch"](function (error) {
              window.alert(error);
            });
          } // Returns true when user is looged in and email is verified

        }, {
          key: "GoogleAuth",
          // Sign in with Google
          value: function GoogleAuth() {
            return this.AuthLogin(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
          } // Auth logic to run auth providers

        }, {
          key: "AuthLogin",
          value: function AuthLogin(provider) {
            var _this5 = this;

            return this.afAuth.signInWithPopup(provider).then(function (result) {
              _this5.ngZone.run(function () {
                _this5.router.navigate(['dashboard']);
              });

              _this5.SetUserData(result.user);
            })["catch"](function (error) {
              window.alert(error);
            });
          }
          /* Setting up user data when sign in with username/password,
          sign up with username/password and sign in with social auth
          provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

        }, {
          key: "SetUserData",
          value: function SetUserData(user) {
            var userRef = this.afs.doc("users/".concat(user.uid));
            var userData = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              emailVerified: user.emailVerified
            };
            return userRef.set(userData, {
              merge: true
            });
          } // Sign out

        }, {
          key: "SignOut",
          value: function SignOut() {
            var _this6 = this;

            return this.afAuth.signOut().then(function () {
              localStorage.removeItem('user');

              _this6.router.navigate(['sign-in']);
            });
          }
        }, {
          key: "isLoggedIn",
          get: function get() {
            var user = JSON.parse(localStorage.getItem('user'));
            return user !== null && user.emailVerified !== false ? true : false;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();

      function isJson(str) {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }

        return true;
      }
      /***/

    },

    /***/
    "Lquv":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _paint_paint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../paint/paint.component */
      "Gs5J");

      function DashboardComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email Verified: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.photoURL ? user_r1.photoURL : "/assets/dummy-user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r1.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.displayName ? user_r1.displayName : "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.uid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.emailVerified);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(authService, router, ngZone) {
          _classCallCheck(this, DashboardComponent);

          this.authService = authService;
          this.router = router;
          this.ngZone = ngZone;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 24,
        vars: 1,
        consts: [[1, "navbar", "navbar-dark", "fixed-top", "bg-dark", "flex-md-nowrap", "p-0", "shadow"], ["href", "https://github.com/jk3vinl/pencil", 1, "navbar-brand", "col-md-2", "col-md-2", "mr-0"], [1, "container-fluid"], [1, "row"], [1, "col-md-2", "d-md-block", "bg-light", "sidebar"], [1, "sidebar-sticky"], [1, "nav", "flex-column"], [1, "nav-item"], [1, "nav-link", "active"], [1, "fas", "fa-user"], [1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["role", "main", 1, "col-md-9", "ml-sm-auto", "col-lg-10", "px-4"], [1, "inner-adjust"], [1, "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "h2"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], [1, "media"], [1, "align-self-start", "mr-5", "img-thumbnail", "rounded-circle", 3, "src", "alt"], [1, "media-body"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kevin's Pencil Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Canvas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_14_listener() {
              return ctx.authService.SignOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "main", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "User Canvas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_22_Template, 21, 6, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-paint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _paint_paint_component__WEBPACK_IMPORTED_MODULE_4__["PaintComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angularfirebase-authentication';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TC++":
    /*!*******************************************************************!*\
      !*** ./src/app/components/verify-email/verify-email.component.ts ***!
      \*******************************************************************/

    /*! exports provided: VerifyEmailComponent */

    /***/
    function TC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
        return VerifyEmailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function VerifyEmailComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We have sent a confirmation email to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email and click on the link to verfiy your email address.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
        }
      }

      var VerifyEmailComponent = /*#__PURE__*/function () {
        function VerifyEmailComponent(authService) {
          _classCallCheck(this, VerifyEmailComponent);

          this.authService = authService;
        }

        _createClass(VerifyEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VerifyEmailComponent;
      }();

      VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) {
        return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      VerifyEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerifyEmailComponent,
        selectors: [["app-verify-email"]],
        decls: 18,
        vars: 1,
        consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "px-logo"], ["href", "https://www.positronx.io", "target", "_blank"], ["src", "https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg", "alt", "positronX.io - Learn Full Stack Development"], [1, "authBlock"], ["class", "formGroup", 4, "ngIf"], [1, "formGroup"], ["type", "button", 1, "btn", "btnPrimary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "redirect"], [1, "text-center"]],
        template: function VerifyEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Thank You for Registering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VerifyEmailComponent_div_8_Template, 8, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_10_listener() {
              return ctx.authService.SendVerificationMail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Resend Verification Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go back to?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyEmailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-verify-email',
            templateUrl: './verify-email.component.html',
            styleUrls: ['./verify-email.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TbR9":
    /*!*********************************!*\
      !*** ./src/app/paint/models.ts ***!
      \*********************************/

    /*! exports provided: DrawingColours, DrawingThickness, DrawingTools, FabricObjectType */

    /***/
    function TbR9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrawingColours", function () {
        return DrawingColours;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrawingThickness", function () {
        return DrawingThickness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrawingTools", function () {
        return DrawingTools;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricObjectType", function () {
        return FabricObjectType;
      });

      var DrawingColours;

      (function (DrawingColours) {
        DrawingColours["BLACK"] = "rgba(0,0,0,1)";
        DrawingColours["WHITE"] = "rgba(255,255,255,1)";
        DrawingColours["RED"] = "rgba(255,0,0,1)";
        DrawingColours["GREEN"] = "rgba(0,255,0,1)";
        DrawingColours["BLUE"] = "rgba(0,0,255,1)";
        DrawingColours["YELLOW"] = "rgba(255,255,0,1)";
      })(DrawingColours || (DrawingColours = {}));

      var DrawingThickness;

      (function (DrawingThickness) {
        DrawingThickness[DrawingThickness["THIN"] = 1] = "THIN";
        DrawingThickness[DrawingThickness["MEDIUM"] = 3] = "MEDIUM";
        DrawingThickness[DrawingThickness["THICK"] = 5] = "THICK";
      })(DrawingThickness || (DrawingThickness = {}));

      var DrawingTools;

      (function (DrawingTools) {
        DrawingTools["SELECT"] = "SELECT";
        DrawingTools["ERASER"] = "ERASER";
        DrawingTools["IMAGE"] = "IMAGE";
        DrawingTools["RECTANGLE"] = "RECTANGLE";
        DrawingTools["PENCIL"] = "PENCIL";
        DrawingTools["LINE"] = "LINE";
        DrawingTools["DASHED_LINE"] = "DASHED_LINE";
        DrawingTools["FILL"] = "FILL";
        DrawingTools["GARBAGE"] = "GARBAGE";
        DrawingTools["SAVE"] = "SAVE";
      })(DrawingTools || (DrawingTools = {}));

      var FabricObjectType;

      (function (FabricObjectType) {
        FabricObjectType["RECT"] = "rect";
        FabricObjectType["IMAGE"] = "image";
        FabricObjectType["LINE"] = "line";
        FabricObjectType["POLYGON"] = "polygon";
        FabricObjectType["PATH"] = "path";
      })(FabricObjectType || (FabricObjectType = {}));
      /***/

    },

    /***/
    "TzUl":
    /*!****************************************!*\
      !*** ./src/app/paint/shape.service.ts ***!
      \****************************************/

    /*! exports provided: FabricShapeService */

    /***/
    function TzUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricShapeService", function () {
        return FabricShapeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! fabric */
      "epSk");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models */
      "TbR9");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! uuid */
      "EcEN");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FabricShapeService = /*#__PURE__*/function () {
        function FabricShapeService(authService) {
          _classCallCheck(this, FabricShapeService);

          this.authService = authService;
        }

        _createClass(FabricShapeService, [{
          key: "fillShape",
          value: function fillShape(object, colour) {
            switch (object.type) {
              case _models__WEBPACK_IMPORTED_MODULE_3__["FabricObjectType"].RECT:
                object.fill = this.setOpacity(colour, 0);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["FabricObjectType"].LINE:
              case _models__WEBPACK_IMPORTED_MODULE_3__["FabricObjectType"].PATH:
                object.stroke = colour;
                break;
            }
          }
        }, {
          key: "setOpacity",
          value: function setOpacity(colour, to) {
            var opacityOfRGBA = new RegExp('(\\d\\.\\d|\\d)\\)');
            return colour.replace(opacityOfRGBA, "".concat(to, ")"));
          } // Creators

        }, {
          key: "createImage",
          value: function createImage(canvas, url) {
            fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Image.fromURL(url, function (oImg) {
              oImg.scale(0.5);
              canvas.add(oImg);
            });
          }
        }, {
          key: "createRectangle",
          value: function createRectangle(canvas, thickness, colour, pointer) {
            var rect = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Rect({
              left: pointer.x,
              top: pointer.y,
              strokeWidth: thickness,
              stroke: colour,
              fill: this.setOpacity(_models__WEBPACK_IMPORTED_MODULE_3__["DrawingColours"].WHITE, 0),
              width: 0,
              height: 0,
              selectable: false,
              hasRotatingPoint: false
            });
            rect.id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
            canvas.add(rect);
            return rect;
          }
        }, {
          key: "createPath",
          value: function createPath(canvas, selectedThickness, selectedColour, pointer) {
            var path = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Path("M ".concat(pointer.x, " ").concat(pointer.y), {
              strokeWidth: selectedThickness,
              stroke: selectedColour,
              fill: '',
              selectable: false,
              hasRotatingPoint: false
            });
            path.id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
            canvas.add(path);
            return path;
          }
        }, {
          key: "createLine",
          value: function createLine(canvas, selectedThickness, selectedColour, dashArray, pointer) {
            var line = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Line([pointer.x, pointer.y, pointer.x, pointer.y], {
              strokeWidth: selectedThickness,
              stroke: selectedColour,
              fill: this.setOpacity(_models__WEBPACK_IMPORTED_MODULE_3__["DrawingColours"].WHITE, 0),
              strokeDashArray: dashArray,
              selectable: false,
              hasRotatingPoint: false,
              selection: false
            });
            line.id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
            canvas.add(line);
            return line;
          } // Formers

        }, {
          key: "formRectangle",
          value: function formRectangle(rect, initPos, pointer) {
            rect.set({
              width: Math.abs(initPos.x - pointer.x),
              height: Math.abs(initPos.y - pointer.y)
            });
            rect.set({
              left: Math.min(pointer.x, initPos.x)
            });
            rect.set({
              top: Math.min(pointer.y, initPos.y)
            });
            rect.setCoords();
          }
        }, {
          key: "formPath",
          value: function formPath(path, pointer) {
            var newLine = ['L', pointer.x, pointer.y];
            path.path.push(newLine);
          }
        }, {
          key: "formLine",
          value: function formLine(line, pointer) {
            line.set({
              x2: pointer.x,
              y2: pointer.y
            });
            line.setCoords();
          } // Finishers

        }, {
          key: "finishPath",
          value: function finishPath(canvas, path) {
            canvas.remove(path);
            var newPath = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Path(path.path, {
              strokeWidth: path.strokeWidth,
              stroke: path.stroke,
              fill: '',
              selectable: false,
              hasRotatingPoint: false
            });
            newPath.id = path.id;
            canvas.add(newPath);
            return newPath;
          }
        }, {
          key: "save",
          value: function save(canvas) {
            this.authService.SaveCanvas(JSON.stringify(canvas));
          }
        }, {
          key: "load",
          value: function load(canvas) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authService.LoadCanvas();

                    case 2:
                      data = _context2.sent;
                      canvas.loadFromJSON(data);
                      return _context2.abrupt("return", data);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FabricShapeService;
      }();

      FabricShapeService.ɵfac = function FabricShapeService_Factory(t) {
        return new (t || FabricShapeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      FabricShapeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: FabricShapeService,
        factory: FabricShapeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FabricShapeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UR1+":
    /*!*********************************************************!*\
      !*** ./src/app/components/sign-in/sign-in.component.ts ***!
      \*********************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function UR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(authService) {
          _classCallCheck(this, SignInComponent);

          this.authService = authService;
        }

        _createClass(SignInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignInComponent;
      }();

      SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignInComponent,
        selectors: [["app-sign-in"]],
        decls: 33,
        vars: 0,
        consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "logo"], ["href", "https://github.com/jk3vinl/pencil"], [1, "authBlock"], [1, "formGroup"], ["type", "text", "placeholder", "Username", "required", "", 1, "formControl"], ["userName", ""], ["type", "password", "placeholder", "Password", "required", "", 1, "formControl"], ["userPassword", ""], ["type", "button", "value", "Log in", 1, "btn", "btnPrimary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "googleBtn", 3, "click"], [1, "fab", "fa-google-plus-g"], [1, "forgotPassword"], ["routerLink", "/forgot-password"], [1, "redirectToLogin"], ["routerLink", "/register-user", 1, "redirect"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kevin's Pencil Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_input_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

              return ctx.authService.SignIn(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_22_listener() {
              return ctx.authService.GoogleAuth();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Log in with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Uy/s":
    /*!************************************************!*\
      !*** ./src/app/paint/event-handler.service.ts ***!
      \************************************************/

    /*! exports provided: EventHandlerService */

    /***/
    function UyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventHandlerService", function () {
        return EventHandlerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! fabric */
      "epSk");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _shape_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shape.service */
      "TzUl");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models */
      "TbR9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RANGE_AROUND_CENTER = 20;

      var EventHandlerService = /*#__PURE__*/function () {
        function EventHandlerService(fabricShapeService) {
          _classCallCheck(this, EventHandlerService);

          this.fabricShapeService = fabricShapeService;
          this._selectedTool = _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].SELECT;
          this._selectedColour = _models__WEBPACK_IMPORTED_MODULE_3__["DrawingColours"].BLACK;
          this.selectedThickness = _models__WEBPACK_IMPORTED_MODULE_3__["DrawingThickness"].THIN;
          this._isMouseDown = false;
        }

        _createClass(EventHandlerService, [{
          key: "createImage",
          value: function createImage(url) {
            this.fabricShapeService.createImage(this.canvas, url);
          }
        }, {
          key: "save",
          value: function save() {
            this.fabricShapeService.save(this.canvas);
          }
        }, {
          key: "load",
          value: function load() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.fabricShapeService.load(this.canvas);

                    case 2:
                      data = _context3.sent;
                      return _context3.abrupt("return", data);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addBGImageSrcToCanvas",
          value: function addBGImageSrcToCanvas() {
            var _this7 = this;

            if (!this.imageDataUrl) {
              return;
            }

            return new Promise(function (resolve, reject) {
              var img = new Image();

              img.onload = function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  var f_img;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          f_img = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Image(img);
                          this.canvas.setWidth(f_img.width);
                          this.canvas.setHeight(f_img.height);
                          this.canvas.setBackgroundImage(f_img, resolve);

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              };

              img.onerror = function () {
                reject();
              };

              img.src = _this7.imageDataUrl;
            });
          }
        }, {
          key: "mouseDown",
          value: function mouseDown(e) {
            this._isMouseDown = true;
            var pointer = this.canvas.getPointer(e);
            this._initPositionOfElement = {
              x: pointer.x,
              y: pointer.y
            };

            switch (this._selectedTool) {
              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].RECTANGLE:
                this._elementUnderDrawing = this.fabricShapeService.createRectangle(this.canvas, this.selectedThickness, this._selectedColour, pointer);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].PENCIL:
                this._elementUnderDrawing = this.fabricShapeService.createPath(this.canvas, this.selectedThickness, this._selectedColour, pointer);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].LINE:
                this._elementUnderDrawing = this.fabricShapeService.createLine(this.canvas, this.selectedThickness, this._selectedColour, [5, 0], pointer);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].DASHED_LINE:
                this._elementUnderDrawing = this.fabricShapeService.createLine(this.canvas, this.selectedThickness, this._selectedColour, [5, 5], pointer);
                break;
            }
          }
        }, {
          key: "mouseMove",
          value: function mouseMove(e) {
            if (!this._isMouseDown) {
              return;
            }

            var pointer = this.canvas.getPointer(e);

            switch (this._selectedTool) {
              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].RECTANGLE:
                this.fabricShapeService.formRectangle(this._elementUnderDrawing, this._initPositionOfElement, pointer);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].PENCIL:
                this.fabricShapeService.formPath(this._elementUnderDrawing, pointer);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].LINE:
              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].DASHED_LINE:
                this.fabricShapeService.formLine(this._elementUnderDrawing, pointer);
                break;
            }

            this.canvas.renderAll();
          }
        }, {
          key: "mouseUp",
          value: function mouseUp() {
            this._isMouseDown = false;

            if (this._selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].PENCIL) {
              this._elementUnderDrawing = this.fabricShapeService.finishPath(this.canvas, this._elementUnderDrawing);
            }

            if (this._selectedTool !== _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].SELECT) {
              this.canvas.renderAll();
            }
          }
        }, {
          key: "extendToObjectWithId",
          value: function extendToObjectWithId() {
            fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.toObject = function (toObject) {
              return function () {
                return fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].util.object.extend(toObject.call(this), {
                  id: this.id
                });
              };
            }(fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.toObject);
          }
        }, {
          key: "objectSelected",
          value: function objectSelected(object) {
            this.previousLeft = object.left;
            this.previousTop = object.top;
            this.previousScaleX = object.scaleX;
            this.previousScaleY = object.scaleY;

            switch (this._selectedTool) {
              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].ERASER:
                this.canvas.remove(object);
                break;

              case _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].FILL:
                this.fabricShapeService.fillShape(object, this._selectedColour);
                break;
            }
          }
        }, {
          key: "objectMoving",
          value: function objectMoving(id, type, newLeft, newTop) {
            var diffX = newLeft - this.previousLeft;
            var diffY = newTop - this.previousTop;
            this.previousLeft = newLeft;
            this.previousTop = newTop;
          }
        }, {
          key: "objectScaling",
          value: function objectScaling(id, type, newScales, newCoords) {
            var scaleDiffX = newScales.x - this.previousScaleX;
            var scaleDiffY = newScales.y - this.previousScaleY;
            this.previousScaleX = newScales.x;
            this.previousScaleY = newScales.y;
            this.objectMoving(id, type, newCoords.left, newCoords.top);
          }
        }, {
          key: "objectsSelectable",
          value: function objectsSelectable(isSelectable) {
            this.canvas.forEachObject(function (obj) {
              obj.selectable = isSelectable;
            });
          }
        }, {
          key: "selectedTool",
          set: function set(t) {
            var _this8 = this;

            this.canvas.discardActiveObject();
            this.canvas.renderAll();
            this._selectedTool = t;

            if (this._selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].SELECT || this._selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].ERASER || this._selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].FILL) {
              this.objectsSelectable(true);
            } else {
              this.objectsSelectable(false);
            }

            if (this.selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].GARBAGE) {
              var background = this.canvas.backgroundImage;
              this.canvas.clear();
              this.canvas.setBackgroundImage(background, function () {});
            }

            if (this.selectedTool === _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"].IMAGE) {
              var reader = new FileReader();

              reader.onloadend = function (event) {
                var data = event.target.result;

                _this8.fabricShapeService.createImage(_this8.canvas, data);
              };
            }
          },
          get: function get() {
            return this._selectedTool;
          }
        }, {
          key: "selectedColour",
          set: function set(c) {
            this._selectedColour = c;
            this.canvas.discardActiveObject();
            this.canvas.renderAll();
          },
          get: function get() {
            return this._selectedColour;
          }
        }]);

        return EventHandlerService;
      }();

      EventHandlerService.ɵfac = function EventHandlerService_Factory(t) {
        return new (t || EventHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shape_service__WEBPACK_IMPORTED_MODULE_2__["FabricShapeService"]));
      };

      EventHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: EventHandlerService,
        factory: EventHandlerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](EventHandlerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _shape_service__WEBPACK_IMPORTED_MODULE_2__["FabricShapeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/routing/app-routing.module */
      "8748");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/sign-in/sign-in.component */
      "UR1+");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sign-up/sign-up.component */
      "ujIQ");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "nAxv");
      /* harmony import */


      var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/verify-email/verify-email.component */
      "TC++");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "05qF");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _paint_paint_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./paint/paint.component */
      "Gs5J");
      /* harmony import */


      var _paint_fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./paint/fabric-canvas/fabric-canvas.component */
      "rj5F");
      /* harmony import */


      var _paint_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./paint/toolbar/toolbar.component */
      "iobc");
      /* harmony import */


      var _paint_toolbar_colour_palette_colour_palette_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./paint/toolbar/colour-palette/colour-palette.component */
      "5NYV");
      /* harmony import */


      var _paint_toolbar_thickness_slider_thickness_slider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./paint/toolbar/thickness-slider/thickness-slider.component */
      "lSXh");
      /* harmony import */


      var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @progress/kendo-angular-inputs */
      "xoAz");
      /* harmony import */


      var _paint_event_handler_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./paint/event-handler.service */
      "Uy/s");
      /* harmony import */


      var _paint_shape_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./paint/shape.service */
      "TzUl"); // Reactive Form
      // App routing modules
      // App components
      // Firebase services + enviorment module
      // Auth service


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _paint_event_handler_service__WEBPACK_IMPORTED_MODULE_23__["EventHandlerService"], _paint_shape_service__WEBPACK_IMPORTED_MODULE_24__["FabricShapeService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["SliderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"], _paint_paint_component__WEBPACK_IMPORTED_MODULE_17__["PaintComponent"], _paint_fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_18__["FabricCanvasComponent"], _paint_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GraphicalToolbarComponent"], _paint_toolbar_colour_palette_colour_palette_component__WEBPACK_IMPORTED_MODULE_20__["ColourPaletteComponent"], _paint_toolbar_thickness_slider_thickness_slider_component__WEBPACK_IMPORTED_MODULE_21__["ThicknessSliderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["SliderModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"], _paint_paint_component__WEBPACK_IMPORTED_MODULE_17__["PaintComponent"], _paint_fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_18__["FabricCanvasComponent"], _paint_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GraphicalToolbarComponent"], _paint_toolbar_colour_palette_colour_palette_component__WEBPACK_IMPORTED_MODULE_20__["ColourPaletteComponent"], _paint_toolbar_thickness_slider_thickness_slider_component__WEBPACK_IMPORTED_MODULE_21__["ThicknessSliderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["SliderModule"]],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _paint_event_handler_service__WEBPACK_IMPORTED_MODULE_23__["EventHandlerService"], _paint_shape_service__WEBPACK_IMPORTED_MODULE_24__["FabricShapeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "eRTK":
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function eRTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.authService.isLoggedIn !== true) {
              this.router.navigate(['sign-in']);
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iobc":
    /*!****************************************************!*\
      !*** ./src/app/paint/toolbar/toolbar.component.ts ***!
      \****************************************************/

    /*! exports provided: GraphicalToolbarComponent */

    /***/
    function iobc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphicalToolbarComponent", function () {
        return GraphicalToolbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _event_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../event-handler.service */
      "Uy/s");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models */
      "TbR9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _colour_palette_colour_palette_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./colour-palette/colour-palette.component */
      "5NYV");
      /* harmony import */


      var _thickness_slider_thickness_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./thickness-slider/thickness-slider.component */
      "lSXh");

      var _c0 = function _c0(a0) {
        return {
          selected: a0
        };
      };

      var GraphicalToolbarComponent = /*#__PURE__*/function () {
        function GraphicalToolbarComponent(fabricService) {
          _classCallCheck(this, GraphicalToolbarComponent);

          this.fabricService = fabricService;
          this.DrawingTools = _models__WEBPACK_IMPORTED_MODULE_3__["DrawingTools"];
          this.selected = this.fabricService.selectedTool;
        }

        _createClass(GraphicalToolbarComponent, [{
          key: "select",
          value: function select(tool) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.fabricService.selectedTool = tool;
                      this.selected = this.fabricService.selectedTool;

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "readFile",
          value: function readFile(input) {
            var _this9 = this;

            var inputImage = input.srcElement.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(inputImage);

            reader.onload = function (event) {
              _this9.fabricService.createImage(reader.result);
            };
          }
        }]);

        return GraphicalToolbarComponent;
      }();

      GraphicalToolbarComponent.ɵfac = function GraphicalToolbarComponent_Factory(t) {
        return new (t || GraphicalToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_event_handler_service__WEBPACK_IMPORTED_MODULE_2__["EventHandlerService"]));
      };

      GraphicalToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GraphicalToolbarComponent,
        selectors: [["app-graphical-toolbar"]],
        decls: 22,
        vars: 21,
        consts: [[1, "d-flex", "flex-wrap", "mb-5"], ["title", "Select and move", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/select.png"], ["title", "Eraser", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/eraser.png"], ["title", "Straight Line", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/line.png"], ["title", "Dashed line", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/dashed-line.png"], ["title", "Rectangle", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/rectangle.png"], ["title", "Free hand draw", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/pencil.png"], ["title", "Clear canvas", 1, "toolbox-item", "ml-1", "mt-1", 3, "ngClass", "click"], ["src", "assets/toolbar-images/garbage.png"], [2, "padding-top", "15px", "padding-left", "5px"], ["for", "file"], ["type", "file", "accept", "image/x-png,image/gif,image/jpeg", 2, "float", "left", 3, "change"]],
        template: function GraphicalToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_2_listener() {
              return ctx.select(ctx.DrawingTools.SELECT);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_4_listener() {
              return ctx.select(ctx.DrawingTools.ERASER);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_6_listener() {
              return ctx.select(ctx.DrawingTools.LINE);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_8_listener() {
              return ctx.select(ctx.DrawingTools.DASHED_LINE);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_10_listener() {
              return ctx.select(ctx.DrawingTools.RECTANGLE);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_12_listener() {
              return ctx.select(ctx.DrawingTools.PENCIL);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicalToolbarComponent_Template_div_click_14_listener() {
              return ctx.select(ctx.DrawingTools.GARBAGE);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Insert image from desktop:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function GraphicalToolbarComponent_Template_input_change_19_listener($event) {
              return ctx.readFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-colour-palette");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-thickness-slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.selected === "SELECT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.selected === "ERASER"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.selected === "LINE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.selected === "DASHED_LINE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.selected === "RECTANGLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.selected === "PENCIL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.selected === "GARBAGE"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _colour_palette_colour_palette_component__WEBPACK_IMPORTED_MODULE_5__["ColourPaletteComponent"], _thickness_slider_thickness_slider_component__WEBPACK_IMPORTED_MODULE_6__["ThicknessSliderComponent"]],
        styles: [".toolbox-item[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid black;\n  text-align: left;\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 28px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhaW50L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYm94LWl0ZW0ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogMjhweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GraphicalToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-graphical-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.scss']
          }]
        }], function () {
          return [{
            type: _event_handler_service__WEBPACK_IMPORTED_MODULE_2__["EventHandlerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lSXh":
    /*!******************************************************************************!*\
      !*** ./src/app/paint/toolbar/thickness-slider/thickness-slider.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ThicknessSliderComponent */

    /***/
    function lSXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThicknessSliderComponent", function () {
        return ThicknessSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _event_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../event-handler.service */
      "Uy/s");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models */
      "TbR9");
      /* harmony import */


      var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @progress/kendo-angular-inputs */
      "xoAz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ThicknessSliderComponent = /*#__PURE__*/function () {
        function ThicknessSliderComponent(eventHandler) {
          _classCallCheck(this, ThicknessSliderComponent);

          this.eventHandler = eventHandler;
          this.min = _models__WEBPACK_IMPORTED_MODULE_2__["DrawingThickness"].THIN;
          this.max = _models__WEBPACK_IMPORTED_MODULE_2__["DrawingThickness"].THICK;
          this.smallStep = 2;
          this.v = this.eventHandler.selectedThickness;
        }

        _createClass(ThicknessSliderComponent, [{
          key: "value",
          get: function get() {
            return this.v;
          },
          set: function set(selected) {
            this.eventHandler.selectedThickness = selected;
            this.v = this.eventHandler.selectedThickness;
          }
        }]);

        return ThicknessSliderComponent;
      }();

      ThicknessSliderComponent.ɵfac = function ThicknessSliderComponent_Factory(t) {
        return new (t || ThicknessSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_event_handler_service__WEBPACK_IMPORTED_MODULE_1__["EventHandlerService"]));
      };

      ThicknessSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ThicknessSliderComponent,
        selectors: [["app-thickness-slider"]],
        decls: 3,
        vars: 7,
        consts: [[1, "mt-4", "ml-1", "d-flex", "row", 2, "padding-left", "5px"], [1, "triangle"], [3, "fixedTickWidth", "vertical", "min", "max", "smallStep", "showButtons", "ngModel", "ngModelChange"]],
        template: function ThicknessSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "kendo-slider", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ThicknessSliderComponent_Template_kendo_slider_ngModelChange_2_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedTickWidth", 15)("vertical", true)("min", ctx.min)("max", ctx.max)("smallStep", ctx.smallStep)("showButtons", false)("ngModel", ctx.value);
          }
        },
        directives: [_progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".triangle[_ngcontent-%COMP%] {\n  height: 40px;\n  border-top: 40px solid black;\n  border-left: 3px solid white;\n  border-right: 3px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnQvdG9vbGJhci90aGlja25lc3Mtc2xpZGVyL3RoaWNrbmVzcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWludC90b29sYmFyL3RoaWNrbmVzcy1zbGlkZXIvdGhpY2tuZXNzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmlhbmdsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXRvcDogNDBweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThicknessSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-thickness-slider',
            templateUrl: './thickness-slider.component.html',
            styleUrls: ['./thickness-slider.component.scss']
          }]
        }], function () {
          return [{
            type: _event_handler_service__WEBPACK_IMPORTED_MODULE_1__["EventHandlerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nAxv":
    /*!*************************************************************************!*\
      !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function nAxv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(authService) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.authService = authService;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 17,
        vars: 0,
        consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "text-center"], [1, "formGroup"], ["type", "email", "placeholder", "Email Address", "required", "", 1, "formControl"], ["passwordResetEmail", ""], ["type", "submit", "value", "Reset Password", 1, "btn", "btnPrimary", 3, "click"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "redirect"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your email address to request a password reset.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_input_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.authService.ForgotPassword(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go back to ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rj5F":
    /*!****************************************************************!*\
      !*** ./src/app/paint/fabric-canvas/fabric-canvas.component.ts ***!
      \****************************************************************/

    /*! exports provided: FabricCanvasComponent */

    /***/
    function rj5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabricCanvasComponent", function () {
        return FabricCanvasComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! fabric */
      "epSk");
      /* harmony import */


      var fabric__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _event_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../event-handler.service */
      "Uy/s");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);

      var FabricCanvasComponent = /*#__PURE__*/function () {
        function FabricCanvasComponent(eventHandler, ngZone) {
          _classCallCheck(this, FabricCanvasComponent);

          this.eventHandler = eventHandler;
          this.ngZone = ngZone;
        }

        _createClass(FabricCanvasComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this10 = this;

            this.ngZone.runOutsideAngular(function () {
              if (_this10.eventHandler.canvas) {
                _this10.eventHandler.canvas.dispose();
              }

              _this10.canvas = new fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Canvas('canvas', {
                selection: false,
                preserveObjectStacking: true
              });
              _this10.eventHandler.canvas = _this10.canvas;

              _this10.eventHandler.extendToObjectWithId();

              fabric__WEBPACK_IMPORTED_MODULE_1__["fabric"].Object.prototype.objectCaching = false;

              _this10.addEventListeners();

              firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                  _this10.eventHandler.load().then(function () {
                    setInterval(function () {
                      _this10.eventHandler.save();
                    }, 1000);
                  });
                }
              });
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.eventHandler.addBGImageSrcToCanvas();
          }
        }, {
          key: "addEventListeners",
          value: function addEventListeners() {
            var _this11 = this;

            this.canvas.on('mouse:down', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onCanvasMouseDown(e);
              });
            });
            this.canvas.on('mouse:move', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onCanvasMouseMove(e);
              });
            });
            this.canvas.on('mouse:up', function () {
              return _this11.ngZone.run(function () {
                return _this11.onCanvasMouseUp();
              });
            });
            this.canvas.on('selection:created', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onSelectionCreated(e);
              });
            });
            this.canvas.on('selection:updated', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onSelectionUpdated(e);
              });
            });
            this.canvas.on('object:moving', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onObjectMoving(e);
              });
            });
            this.canvas.on('object:scaling', function (e) {
              return _this11.ngZone.run(function () {
                return _this11.onObjectScaling(e);
              });
            });
          }
        }, {
          key: "onCanvasMouseDown",
          value: function onCanvasMouseDown(event) {
            this.eventHandler.mouseDown(event.e);
            this.avoidDragAndClickEventsOfOtherUILibs(event.e);
          }
        }, {
          key: "onCanvasMouseMove",
          value: function onCanvasMouseMove(event) {
            this.eventHandler.mouseMove(event.e);
          }
        }, {
          key: "onCanvasMouseUp",
          value: function onCanvasMouseUp() {
            this.eventHandler.mouseUp();
          }
        }, {
          key: "onSelectionCreated",
          value: function onSelectionCreated(e) {
            this.eventHandler.objectSelected(e.target);
          }
        }, {
          key: "onSelectionUpdated",
          value: function onSelectionUpdated(e) {
            this.eventHandler.objectSelected(e.target);
          }
        }, {
          key: "onObjectMoving",
          value: function onObjectMoving(e) {
            this.eventHandler.objectMoving(e.target.id, e.target.type, e.target.left, e.target.top);
          }
        }, {
          key: "onObjectScaling",
          value: function onObjectScaling(e) {
            this.eventHandler.objectScaling(e.target.id, e.target.type, {
              x: e.target.scaleX,
              y: e.target.scaleY
            }, {
              left: e.target.left,
              top: e.target.top
            });
          }
        }, {
          key: "avoidDragAndClickEventsOfOtherUILibs",
          value: function avoidDragAndClickEventsOfOtherUILibs(e) {
            e.stopPropagation();
          }
        }, {
          key: "imageDataURL",
          set: function set(v) {
            if (v) {
              this.eventHandler.imageDataUrl = v;
            }
          }
        }]);

        return FabricCanvasComponent;
      }();

      FabricCanvasComponent.ɵfac = function FabricCanvasComponent_Factory(t) {
        return new (t || FabricCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_event_handler_service__WEBPACK_IMPORTED_MODULE_2__["EventHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      FabricCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FabricCanvasComponent,
        selectors: [["app-fabric-canvas"]],
        inputs: {
          imageDataURL: "imageDataURL"
        },
        decls: 2,
        vars: 0,
        consts: [[1, "canvas-wrapper"], ["id", "canvas"]],
        template: function FabricCanvasComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".canvas-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 800px;\n  height: 500px;\n  border: 3px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbnQvZmFicmljLWNhbnZhcy9mYWJyaWMtY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhaW50L2ZhYnJpYy1jYW52YXMvZmFicmljLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXMtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FabricCanvasComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-fabric-canvas',
            templateUrl: './fabric-canvas.component.html',
            styleUrls: ['./fabric-canvas.component.scss']
          }]
        }], function () {
          return [{
            type: _event_handler_service__WEBPACK_IMPORTED_MODULE_2__["EventHandlerService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          imageDataURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ujIQ":
    /*!*********************************************************!*\
      !*** ./src/app/components/sign-up/sign-up.component.ts ***!
      \*********************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function ujIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(authService) {
          _classCallCheck(this, SignUpComponent);

          this.authService = authService;
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-sign-up"]],
        decls: 30,
        vars: 0,
        consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "logo"], ["href", "https://github.com/jk3vinl/pencil"], [1, "authBlock"], [1, "formGroup"], ["type", "email", "placeholder", "Email Address", "required", "", 1, "formControl"], ["userEmail", ""], ["type", "password", "placeholder", "Password", "required", "", 1, "formControl"], ["userPwd", ""], ["type", "button", "value", "Sign Up", 1, "btn", "btnPrimary", 3, "click"], [1, "or"], [1, "orInner"], ["type", "button", 1, "btn", "googleBtn", 3, "click"], [1, "fab", "fa-google-plus-g"], [1, "redirectToLogin"], ["routerLink", "/sign-in", 1, "redirect"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kevin's Pencil Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

              return ctx.authService.SignUp(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_22_listener() {
              return ctx.authService.GoogleAuth();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Continue with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Log In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map