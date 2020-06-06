import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { animate, style } from '@angular/animations'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { AnimationService } from '../animation.service'

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit, OnDestroy {
  @Input() zIndex: number
  @Input() opacity: number = 0.5
  @Input()
  set visible(value: boolean) {
    if (value) {
      this._visible = true
      this.cdr.detectChanges()
      this.makeAnimation('enter')
    } else {
      this.makeAnimation('leave')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this._visible = false
          this.cdr.detectChanges()
          this.afterClose.emit()
        })
    }
  }
  get visible() {
    return this._visible
  }

  @Output() clickOverlay = new EventEmitter<any>()
  @Output() afterClose = new EventEmitter<any>()

  @ViewChild('container', { static: false }) container

  get styles() {
    return {
      'z-index': this.zIndex,
      'background': `rgba(0, 0, 0, ${this.opacity})`
    }
  }

  private _visible = false
  private destroy$ = new Subject<any>()

  constructor(private animation: AnimationService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onClick() {
    this.clickOverlay.emit()
  }

  @HostListener('touchmove', ['$event'])
  onTouchmove(ev) {
    ev.preventDefault()
  }

  makeAnimation(state) {
    const isEnter = state === 'enter'
    const el = this.container.nativeElement
    const animation = isEnter
      ? [style({ opacity: 0 }), animate('.3s ease', style({ opacity: 1 }))]
      : [style({ opacity: 1 }), animate('.3s ease', style({ opacity: 0 }))]

    return this.animation.makeAnimation(el, animation)
  }
}
