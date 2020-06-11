import { Component, OnInit } from '@angular/core'

@Component({
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
export class PositionComponent implements OnInit {
  constructor() {}

  visible = false
  position = 'center'

  ngOnInit() {}

  show(position) {
    this.position = position
    this.visible = true
  }
}
