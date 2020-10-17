import { Component, OnInit } from "@angular/core";
import { animate, style, keyframes } from "@angular/animations";

@Component({
  selector: "animations-demo",
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

  visible = false;
  currentAnimations = {};
  animations1 = {
    enter: [
      style({ transform: "scale(0)" }),
      animate(
        "1s",
        keyframes([
          style({ transform: "scale(0)", offset: 0 }),
          style({ transform: "scale(0.11)", offset: 0.04 }),
          style({ transform: "scale(0.44)", offset: 0.08 }),
          style({ transform: "scale(0.98)", offset: 0.18 }),
          style({ transform: "scale(0.75)", offset: 0.26 }),
          style({ transform: "scale(0.98)", offset: 0.46 }),
          style({ transform: "scale(0.94)", offset: 0.64 }),
          style({ transform: "scale(0.99)", offset: 0.76 }),
          style({ transform: "scale(0.98)", offset: 0.88 }),
          style({ transform: "scale(1)", offset: 1 })
        ])
      )
    ],
    leave: [
      style({ transform: "scale(1)" }),
      animate(".3s ease", style({ transform: "scale(0)" }))
    ]
  };
  animations2 = {
    enter: [
      style({ opacity: 0, transform: "translate3d(0, -150%, 0)" }),
      animate(
        ".5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        style({ opacity: 1, transform: "translate3d(0, 0, 0)" })
      )
    ],
    leave: [
      style({ opacity: 1, transform: "translate3d(0, 0, 0)" }),
      animate(
        ".3s ease",
        style({ opacity: 0, transform: "translate3d(0, -150%, 0)" })
      )
    ]
  };

  ngOnInit() {}

  show(type) {
    if (type === 1) {
      this.currentAnimations = this.animations1;
    } else if (type === 2) {
      this.currentAnimations = this.animations2;
    }
    this.visible = true;
  }
}
