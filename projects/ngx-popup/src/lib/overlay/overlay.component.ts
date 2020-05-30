import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import { AnimationService } from '../animation.service'
import { animate, style } from '@angular/animations'
import nextTick from 'next-tick'

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent implements OnInit {
  @Input() zIndex: number
  @Input() opacity: number = 0.5
  @Input()
  set show(value: boolean) {
    if (value) {
      this._show = true
      this.cdr.detectChanges()
      nextTick(() => {
        this.makeAnimation('enter')
      })
    } else {
      this.makeAnimation('leave').subscribe(() => {
        this._show = false
        this.cdr.detectChanges()
        this.afterClose.emit()
      })
    }
  }
  get show() {
    return this._show
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

  private _show = false

  constructor(private animation: AnimationService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

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
