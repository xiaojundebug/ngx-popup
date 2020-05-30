import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { PopupModule } from 'ngx-popup'

import { AppComponent } from './app.component'
import { BaseComponent } from './base.component'
import { PositionComponent } from './position.component'
import { AnimationsComponent } from './animations.component'

@NgModule({
  declarations: [AppComponent, BaseComponent, PositionComponent, AnimationsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PopupModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

