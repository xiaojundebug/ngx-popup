import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'base-demo',
  template: `
    <ngx-popup [(ngModel)]="visible">
      <div style="background: #fff; padding: 50px;">hello world</div>
    </ngx-popup>

    <button (click)="show()">show</button>
  `
})
export class BaseComponent implements OnInit {
  constructor() {}

  visible = false

  ngOnInit() {}

  show() {
    this.visible = true
  }
}
