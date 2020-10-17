(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ngx-popup/fesm2015/ciri-ngx-popup.js":
/*!***************************************************!*\
  !*** ./dist/ngx-popup/fesm2015/ciri-ngx-popup.js ***!
  \***************************************************/
/*! exports provided: PopupComponent, PopupModule, Position, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModule", function() { return PopupModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OverlayHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AnimationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/animation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnimationService {
    /**
     * @param {?} builder
     */
    constructor(builder) {
        this.builder = builder;
    }
    /**
     * @param {?} element
     * @param {?} animation
     * @return {?}
     */
    makeAnimation(element, animation) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            // first define a reusable animation
            /** @type {?} */
            const myAnimation = this.builder.build(animation)
            // use the returned factory object to create a player
            ;
            // use the returned factory object to create a player
            /** @type {?} */
            const player = myAnimation.create(element);
            player.play();
            player.onDone((/**
             * @return {?}
             */
            () => {
                observer.next();
                observer.complete();
            }));
            return (/**
             * @return {?}
             */
            () => {
                player.destroy();
            });
        }));
    }
}
AnimationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AnimationService.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] }
];
/** @nocollapse */ AnimationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AnimationService_Factory() { return new AnimationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"])); }, token: AnimationService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/overlay/overlay.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverlayComponent {
    /**
     * @param {?} animation
     * @param {?} cdr
     */
    constructor(animation, cdr) {
        this.animation = animation;
        this.cdr = cdr;
        this.opacity = 0.5;
        this.clickOverlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._visible = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        this.animationSub && this.animationSub.unsubscribe();
        if (value) {
            this._visible = true;
            this.cdr.detectChanges();
            this.animationSub = this.makeAnimation('enter')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => { }));
        }
        else {
            this.animationSub = this.makeAnimation('leave')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this._visible = false;
                this.cdr.detectChanges();
                this.afterClose.emit();
            }));
        }
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    get styles() {
        return {
            'z-index': this.zIndex,
            'background': `rgba(0, 0, 0, ${this.opacity})`,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    onClick() {
        this.clickOverlay.emit();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    makeAnimation(state) {
        /** @type {?} */
        const isEnter = state === 'enter';
        /** @type {?} */
        const el = this.container.nativeElement;
        /** @type {?} */
        const animation = isEnter
            ? [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))]
            : [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))];
        return this.animation.makeAnimation(el, animation);
    }
}
OverlayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'popup-overlay',
                template: "<div\n  class=\"overlay\"\n  #container\n  [hidden]=\"!visible\"\n  [ngStyle]=\"styles\"\n  (click)=\"onClick()\"\n></div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".overlay{position:fixed;top:0;right:0;bottom:0;left:0}"]
            }] }
];
/** @nocollapse */
OverlayComponent.ctorParameters = () => [
    { type: AnimationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
OverlayComponent.propDecorators = {
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/overlay/overlay-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OverlayOptions() { }
if (false) {}
/**
 * \@dynamic
 */
class OverlayHelper {
    /**
     * @param {?} appRef
     * @param {?} cfr
     * @param {?} injector
     * @param {?} document
     */
    constructor(appRef, cfr, injector, document) {
        this.appRef = appRef;
        this.cfr = cfr;
        this.injector = injector;
        this.document = document;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    open(options) {
        /** @type {?} */
        const opts = Object.assign(this.getDefaultOptions(), options);
        const { opacity, zIndex, getContainer } = opts;
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(OverlayComponent);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const { nativeElement } = componentRef.location;
        /** @type {?} */
        const container = getContainer();
        container.insertBefore(nativeElement, container.firstChild);
        /** @type {?} */
        const inst = componentRef.instance;
        inst.opacity = opacity;
        inst.zIndex = zIndex;
        inst.visible = true;
        this.setListener(componentRef, opts);
        return (/**
         * @return {?}
         */
        () => {
            inst.visible = false;
        });
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultOptions() {
        return {
            opacity: 0.5,
            getContainer: (/**
             * @return {?}
             */
            () => document.body)
        };
    }
    /**
     * @private
     * @param {?} componentRef
     * @param {?} opts
     * @return {?}
     */
    setListener(componentRef, opts) {
        /** @type {?} */
        const inst = componentRef.instance;
        /** @type {?} */
        const subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        const { onClick } = opts;
        subs.add(inst.afterClose.subscribe((/**
         * @return {?}
         */
        () => {
            componentRef.destroy();
        })));
        if (onClick) {
            subs.add(inst.clickOverlay.subscribe((/**
             * @return {?}
             */
            () => {
                onClick();
            })));
        }
        componentRef.onDestroy((/**
         * @return {?}
         */
        () => {
            subs.unsubscribe();
        }));
    }
}
OverlayHelper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OverlayHelper.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
/** @nocollapse */ OverlayHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function OverlayHelper_Factory() { return new OverlayHelper(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: OverlayHelper, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/popup/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let zIndex = 9999;
/**
 * @record
 */
function PopupAnimations() { }
if (false) {}
/** @enum {string} */
const Position = {
    center: "center",
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
};
class PopupComponent {
    /**
     * @param {?} hostElRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} overlayHelper
     * @param {?} animation
     */
    constructor(hostElRef, cdr, renderer, overlayHelper, animation) {
        this.hostElRef = hostElRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.overlayHelper = overlayHelper;
        this.animation = animation;
        /* inputs
          -------------------------- */
        this.position = Position.center; /** 弹窗位置 */
        /**
         * 弹窗位置
         */
        this.animations = {}; /** 自定义动画 */
        /**
         * 自定义动画
         */
        this.overlay = true; /** 是否显示蒙版 */
        /**
         * 是否显示蒙版
         */
        this.overlayOpacity = 0.5; /** 蒙版透明度 0~1 */
        /**
         * 蒙版透明度 0~1
         */
        this.closeOnClickOverlay = true; /** 是否允许点击蒙版时自动关闭弹框 */
        /**
         * 是否允许点击蒙版时自动关闭弹框
         */
        this.zIndex = zIndex++; /** 同 css z-index */
        /**
         * 同 css z-index
         */
        this.externalClass = {}; /** 自定义类名 */
        /**
         * 自定义类名
         */
        /* outputs
          -------------------------- */
        this.clickOverlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); /** 点击蒙版时触发 */
        /**
         * 点击蒙版时触发
         */
        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); /** 打开之前触发（还未执行进场动画） */
        /**
         * 打开之前触发（还未执行进场动画）
         */
        this.afterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); /** 打开之后触发（进场动画执行完毕） */
        /**
         * 打开之后触发（进场动画执行完毕）
         */
        this.beforeClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); /** 关闭之前触发（还未执行离场动画） */
        /**
         * 关闭之前触发（还未执行离场动画）
         */
        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); /** 关闭之后触发（离场动画执行完毕） */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dirty = false;
        this.leaving = false;
    }
    /**
     * @return {?}
     */
    get el() {
        return this.container.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value === null) {
            return;
        }
        if (!this.dirty && !value) {
            return;
        }
        if (this.animationSub) {
            this.animationSub.unsubscribe();
        }
        if (value) {
            this.open();
        }
        else {
            this.close();
        }
        this.onChange(value);
        this.dirty = true;
    }
    /**
     * @private
     * @return {?}
     */
    open() {
        // 避免闪烁
        this.renderer.setStyle(this.el, 'opacity', 0);
        this.visible = true;
        this.cdr.markForCheck();
        this.beforeOpen.emit();
        this.leaving = false;
        // 优化性能
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.removeStyle(this.el, 'opacity');
            this.overlay && this.openOverlay();
            this.animationSub = this.makeAnimation('enter')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.afterOpen.emit();
            }));
        }), 0);
    }
    /**
     * @private
     * @return {?}
     */
    close() {
        this.beforeClose.emit();
        this.leaving = true;
        this.overlay && this.closeOverlay();
        this.animationSub = this.makeAnimation('leave')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.visible = false;
            this.cdr.detectChanges();
            this.afterClose.emit();
            this.leaving = false;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    openOverlay() {
        this.closeOverlay = this.overlayHelper.open({
            opacity: this.overlayOpacity,
            zIndex: this.zIndex,
            getContainer: (/**
             * @return {?}
             */
            () => this.hostElRef.nativeElement),
            onClick: (/**
             * @return {?}
             */
            () => {
                this.clickOverlay.emit();
                if (this.closeOnClickOverlay && this.visible && !this.leaving) {
                    this.writeValue(false);
                }
            })
        });
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    makeAnimation(state) {
        /** @type {?} */
        const el = this.container.nativeElement;
        /** @type {?} */
        const animation = state === 'leave' ? this.getLeaveAnimation() : this.getEnterAnimation();
        return this.animation.makeAnimation(el, animation);
    }
    /**
     * @private
     * @return {?}
     */
    getEnterAnimation() {
        return this.animations.enter || {
            [Position.center]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))],
            [Position.top]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, -100%, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }))],
            [Position.right]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(100%, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }))],
            [Position.bottom]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 100%, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }))],
            [Position.left]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-100%, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }))]
        }[this.position];
    }
    /**
     * @private
     * @return {?}
     */
    getLeaveAnimation() {
        return this.animations.leave || {
            [Position.center]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))],
            [Position.top]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, -100%, 0)' }))],
            [Position.right]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(100%, 0, 0)' }))],
            [Position.bottom]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 100%, 0)' }))],
            [Position.left]: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0, 0, 0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-100%, 0, 0)' }))]
        }[this.position];
    }
}
PopupComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-popup',
                template: "<div class=\"ngx-popup-wrapper is-{{ position }}\" [hidden]=\"!visible\" [style.zIndex]=\"zIndex\">\n  <div class=\"ngx-popup\" #container [ngClass]=\"externalClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => PopupComponent)),
                        multi: true
                    }
                ],
                styles: [".ngx-popup-wrapper{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;pointer-events:none}.ngx-popup-wrapper[hidden]{display:none}.ngx-popup-wrapper .ngx-popup{pointer-events:auto}.ngx-popup-wrapper.is-center{align-items:center;justify-content:center}.ngx-popup-wrapper.is-top{align-items:flex-start;justify-content:center}.ngx-popup-wrapper.is-top .ngx-popup{width:100%}.ngx-popup-wrapper.is-right{align-items:center;justify-content:flex-end}.ngx-popup-wrapper.is-right .ngx-popup{height:100%}.ngx-popup-wrapper.is-bottom{align-items:flex-end;justify-content:center}.ngx-popup-wrapper.is-bottom .ngx-popup{width:100%}.ngx-popup-wrapper.is-left{align-items:center;justify-content:flex-start}.ngx-popup-wrapper.is-left .ngx-popup{height:100%}"]
            }] }
];
/** @nocollapse */
PopupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: OverlayHelper },
    { type: AnimationService }
];
PopupComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    overlayOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOnClickOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    beforeOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    beforeClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    afterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/popup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopupModule {
}
PopupModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [OverlayComponent, PopupComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], PopupComponent],
                entryComponents: [OverlayComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ciri-ngx-popup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ciri-ngx-popup.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Basic Usage</h3>\n<base-demo></base-demo>\n\n<h3>Set Position</h3>\n<position-demo></position-demo>\n\n<h3>Custom Animation</h3>\n<animations-demo></animations-demo>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/animations.component.ts":
/*!*****************************************!*\
  !*** ./src/app/animations.component.ts ***!
  \*****************************************/
/*! exports provided: AnimationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsComponent", function() { return AnimationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AnimationsComponent = class AnimationsComponent {
    constructor() {
        this.visible = false;
        this.currentAnimations = {};
        this.animations1 = {
            enter: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0)", offset: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.11)", offset: 0.04 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.44)", offset: 0.08 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.98)", offset: 0.18 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.75)", offset: 0.26 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.98)", offset: 0.46 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.94)", offset: 0.64 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.99)", offset: 0.76 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0.98)", offset: 0.88 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(1)", offset: 1 })
                ]))
            ],
            leave: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(1)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".3s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "scale(0)" }))
            ]
        };
        this.animations2 = {
            enter: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translate3d(0, -150%, 0)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".5s cubic-bezier(0.34, 1.56, 0.64, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translate3d(0, 0, 0)" }))
            ],
            leave: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: "translate3d(0, 0, 0)" }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".3s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: "translate3d(0, -150%, 0)" }))
            ]
        };
    }
    ngOnInit() { }
    show(type) {
        if (type === 1) {
            this.currentAnimations = this.animations1;
        }
        else if (type === 2) {
            this.currentAnimations = this.animations2;
        }
        this.visible = true;
    }
};
AnimationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "animations-demo",
        template: `
    <ngx-popup [(ngModel)]="visible" [animations]="currentAnimations">
      <div style="padding: 100px; background: #fff"></div>
    </ngx-popup>

    <button (click)="show(1)">example 1</button>&nbsp;
    <button (click)="show(2)">example 2</button>&nbsp;
  `
    })
], AnimationsComponent);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-popup */ "./dist/ngx-popup/fesm2015/ciri-ngx-popup.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
/* harmony import */ var _animations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations.component */ "./src/app/animations.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"], _position_component__WEBPACK_IMPORTED_MODULE_7__["PositionComponent"], _animations_component__WEBPACK_IMPORTED_MODULE_8__["AnimationsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_popup__WEBPACK_IMPORTED_MODULE_4__["PopupModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaseComponent = class BaseComponent {
    constructor() {
        this.visible = false;
    }
    ngOnInit() { }
    show() {
        this.visible = true;
    }
};
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'base-demo',
        template: `
    <ngx-popup [(ngModel)]="visible">
      <div style="background: #fff; padding: 50px;">hello world</div>
    </ngx-popup>

    <button (click)="show()">show</button>
  `
    })
], BaseComponent);



/***/ }),

/***/ "./src/app/position.component.ts":
/*!***************************************!*\
  !*** ./src/app/position.component.ts ***!
  \***************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PositionComponent = class PositionComponent {
    constructor() {
        this.visible = false;
        this.position = 'center';
    }
    ngOnInit() { }
    show(position) {
        this.position = position;
        this.visible = true;
    }
};
PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'position-demo',
        template: `
    <ngx-popup [(ngModel)]="visible" [position]="position">
      <div
        style="
          width: 100%;
          height: 100%;
          padding: 100px;
          box-sizing: border-box;
          background: #fff;
        "
      ></div>
    </ngx-popup>

    <button (click)="show('center')">center</button>&nbsp;
    <button (click)="show('top')">top</button>&nbsp;
    <button (click)="show('bottom')">bottom</button>&nbsp;
    <button (click)="show('left')">left</button>&nbsp;
    <button (click)="show('right')">right</button>
  `
    })
], PositionComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/xiaojun1994/ngx-popup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map