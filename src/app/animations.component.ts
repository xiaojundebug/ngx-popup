import { Component, OnInit } from '@angular/core'
import { animate, style } from '@angular/animations'

@Component({
  selector: 'animations-demo',
  template: `
    <ngx-popup [(ngModel)]="visible" [animations]="currentAnimations">
      <div style="padding: 100px; background: #fff"></div>
    </ngx-popup>

    <button (click)="show(1)">example 1</button>&nbsp;
    <button (click)="show(2)">example 2</button>&nbsp;
  `
})
export class AnimationsComponent implements OnInit {
  constructor() {}

  visible = false
  currentAnimations = {}
  animations1 = {
    enter: [
      style({ opacity: 0, transform: 'scale(0.7)' }),
      animate('.3s ease', style({ opacity: 1, transform: 'scale(1)' }))
    ],
    leave: [
      style({ opacity: 1, transform: 'scale(1)' }),
      animate('.3s ease', style({ opacity: 0, transform: 'scale(0.9)' }))
    ]
  }
  animations2 = {
    enter: [
      style({ opacity: 0, transform: 'translate3d(0, -100%, 0)' }),
      animate(
        '.5s cubic-bezier(.45,.47,.22,1.4)',
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })
      )
    ],
    leave: [
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)' }),
      animate('.3s ease', style({ opacity: 0, transform: 'translate3d(0, -100%, 0)' }))
    ]
  }

  ngOnInit() {}

  show(type) {
    if (type === 1) {
      this.currentAnimations = this.animations1
    } else if (type === 2) {
      this.currentAnimations = this.animations2
    }
    this.visible = true
  }
}
