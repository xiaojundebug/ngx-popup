import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopupComponent } from './popup/popup.component'
import { FormsModule } from '@angular/forms'
import { OverlayComponent } from './overlay/overlay.component'

@NgModule({
  declarations: [OverlayComponent, PopupComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, PopupComponent],
  entryComponents: [OverlayComponent]
})
export class PopupModule {}
