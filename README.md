# NgxPopup

An angular popup component that can customize animation.

<p align="center">
  <img alt="travis" src="https://travis-ci.org/xiaojun1994/ngx-popup.svg?branch=master">&nbsp;
</p>

👉 [Demo](https://stackblitz.com/edit/ngx-popup-demo)

_PS: There may be animation flashing problems on stackblitz, but my local test will not_

## 🚀 Install

```bash
npm i @ciri/ngx-popup
```

## 🎉 Quick Start

Add it to your module:

```typescript
import { PopupModule } from '@ciri/ngx-popup'

@NgModule({
  // ...
  imports: [
    // ...
    PopupModule
  ],
})
```

Add to view:

```html
<ngx-popup [(ngModel)]="visible">
  <div style="background: #fff; padding: 50px;">hello world</div>
</ngx-popup>
```

## 📌 Set Position

```html
<ngx-popup [(ngModel)]="visible" position="bottom"></ngx-popup>
```

## 🎁 Custom Animation

```typescript
import { Component, OnInit } from '@angular/core'
import { animate, style } from '@angular/animations'

@Component({
  selector: 'app-root',
  template: `
    <ngx-popup [(ngModel)]="visible" [animations]="animations">
      <div style="padding: 100px; background: #fff"></div>
    </ngx-popup>

    <button (click)="show()">show</button>&nbsp;
  `
})
export class AppComponent implements OnInit {
  visible = false
  animations = {
    enter: [
      style({ opacity: 0, transform: 'scale(0.7)' }),
      animate('.3s ease', style({ opacity: 1, transform: 'scale(1)' }))
    ],
    leave: [
      style({ opacity: 1, transform: 'scale(1)' }),
      animate('.3s ease', style({ opacity: 0, transform: 'scale(0.9)' }))
    ]
  }

  constructor() {}

  ngOnInit() {}

  show() {
    this.visible = true
  }
}
```

## 🍭 Inputs

| Name                | Type    | Default | Description                                 |
| ------------------- | ------- | ------- | ------------------------------------------- |
| position            | string  | center  | Can be set to `top` `bottom` `right` `left` |
| animations          | object  | -       | Custom animation                            |
| overlay             | boolean | true    | Whether to show overlay                     |
| overlayOpacity      | number  | 0.5     | Set overlay opacity                         |
| closeOnClickOverlay | boolean | true    | Whether to close when click overlay         |
| externalClass       | object  | -       | Custom class, equivalent to [ngClass]       |
| zIndex              | number  | 9999    | Increasing from 9999                        |

## 🐚 Outputs

| Event        | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| clickOverlay | Triggered when click overlay                                          |
| beforeClose  | Triggered when before closing (Leave animation has not been executed) |
| afterClose   | Triggered when after closing (Leave animation completed)              |
