import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { OverlayComponent } from './overlay/overlay.component'
import { PopupComponent } from './popup/popup.component'

@NgModule({
  declarations: [OverlayComponent, PopupComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, PopupComponent],
  entryComponents: [OverlayComponent]
})
export class PopupModule {}
