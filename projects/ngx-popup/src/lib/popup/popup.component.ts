import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  Output, Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { animate, AnimationMetadata, style } from '@angular/animations'
import { Subject, Subscription } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { OverlayHelper } from '../overlay/overlay-helper'
import { AnimationService } from '../animation.service'

let zIndex = 9999

export interface PopupAnimations {
  enter?: AnimationMetadata | AnimationMetadata[]
  leave?: AnimationMetadata | AnimationMetadata[]
}

export enum Position {
  center = 'center',
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left'
}
@Component({
  selector: 'ngx-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PopupComponent),
      multi: true
    }
  ]
})
export class PopupComponent implements ControlValueAccessor, OnDestroy {
  /* inputs
  -------------------------- */
  @Input() position: Position = Position.center    /** 弹窗位置 */
  @Input() animations: PopupAnimations = {}        /** 自定义动画 */
  @Input() overlay: boolean = true                 /** 是否显示蒙版 */
  @Input() overlayOpacity: number = 0.5            /** 蒙版透明度 0~1 */
  @Input() closeOnClickOverlay: boolean = true     /** 是否允许点击蒙版时自动关闭弹框 */
  @Input() zIndex: number = zIndex++               /** 同 css z-index */
  @Input() externalClass: object = {}              /** 自定义类名 */
  /* outputs
  -------------------------- */
  @Output() clickOverlay = new EventEmitter<any>() /** 点击蒙版时触发 */
  @Output() beforeOpen = new EventEmitter<any>()   /** 打开之前触发（还未执行进场动画） */
  @Output() afterOpen = new EventEmitter<any>()    /** 打开之后触发（进场动画执行完毕） */
  @Output() beforeClose = new EventEmitter<any>()  /** 关闭之前触发（还未执行离场动画） */
  @Output() afterClose = new EventEmitter<any>()   /** 关闭之后触发（离场动画执行完毕） */

  @ViewChild('container', { static: false }) private container: ElementRef

  visible: boolean
  get el() {
    return this.container.nativeElement
  }

  private destroy$ = new Subject<any>()
  private animationSub: Subscription
  private dirty = false
  private leaving = false
  private onChange: (value: any) => void
  private closeOverlay: () => void

  constructor(
    private hostElRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private overlayHelper: OverlayHelper,
    private animation: AnimationService
  ) {}

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {}

  writeValue(value: boolean) {
    if (value === null) { return }
    if (!this.dirty && !value) { return }
    if (this.animationSub) { this.animationSub.unsubscribe() }

    if (value) {
      this.open()
    } else {
      this.close()
    }

    this.onChange(value)
    this.dirty = true
  }

  private open() {
    // 避免闪烁
    this.renderer.setStyle(this.el, 'opacity', 0)
    this.visible = true
    this.cdr.markForCheck()
    this.beforeOpen.emit()
    this.leaving = false
    // 优化性能
    setTimeout(() => {
      this.renderer.removeStyle(this.el, 'opacity')
      this.overlay && this.openOverlay()
      this.animationSub = this.makeAnimation('enter')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.afterOpen.emit()
        })
    }, 0)
  }

  private close() {
    this.beforeClose.emit()
    this.leaving = true
    this.overlay && this.closeOverlay()
    this.animationSub = this.makeAnimation('leave')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.visible = false
        this.cdr.detectChanges()
        this.afterClose.emit()
        this.leaving = false
      })
  }

  private openOverlay() {
    this.closeOverlay = this.overlayHelper.open({
      opacity: this.overlayOpacity,
      zIndex: this.zIndex,
      getContainer: () => this.hostElRef.nativeElement,
      onClick: () => {
        this.clickOverlay.emit()
        if (this.closeOnClickOverlay && this.visible && !this.leaving) {
          this.writeValue(false)
        }
      }
    })
  }

  private makeAnimation(state: 'enter' | 'leave') {
    const el = this.container.nativeElement
    const animation = state === 'leave' ? this.getLeaveAnimation() : this.getEnterAnimation()

    return this.animation.makeAnimation(el, animation)
  }

  private getEnterAnimation() {
    return this.animations.enter || {
      [Position.center]: [ style({ opacity: 0 }), animate('.3s ease', style({ opacity: 1 })) ],
      [Position.top]   : [ style({ transform: 'translate3d(0, -100%, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, 0, 0)' })) ],
      [Position.right] : [ style({ transform: 'translate3d(100%, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, 0, 0)' })) ],
      [Position.bottom]: [ style({ transform: 'translate3d(0, 100%, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, 0, 0)' })) ],
      [Position.left]  : [ style({ transform: 'translate3d(-100%, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, 0, 0)' })) ]
    }[this.position]
  }

  private getLeaveAnimation() {
    return this.animations.leave || {
      [Position.center]: [ style({ opacity: 1 }), animate('.3s ease', style({ opacity: 0 })) ],
      [Position.top]   : [ style({ transform: 'translate3d(0, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, -100%, 0)' })) ],
      [Position.right] : [ style({ transform: 'translate3d(0, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(100%, 0, 0)' })) ],
      [Position.bottom]: [ style({ transform: 'translate3d(0, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(0, 100%, 0)' })) ],
      [Position.left]  : [ style({ transform: 'translate3d(0, 0, 0)' }), animate('.3s ease', style({ transform: 'translate3d(-100%, 0, 0)' })) ]
    }[this.position]
  }
}
