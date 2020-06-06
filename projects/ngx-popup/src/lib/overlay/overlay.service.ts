import {
  Injectable,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  Inject
} from '@angular/core'
import { OverlayComponent } from './overlay.component'
import { DOCUMENT } from '@angular/common'

interface OverlayOptions {
  opacity: number
  zIndex?: number
  onClick?: () => void
}

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(opts: OverlayOptions) {
    const { opacity = 0.5, zIndex, onClick } = opts

    const factory = this.cfr.resolveComponentFactory(OverlayComponent)
    const componentRef = factory.create(this.injector)
    this.appRef.attachView(componentRef.hostView)

    const { nativeElement } = componentRef.location
    this.document.body.insertBefore(nativeElement, document.body.firstChild)

    const overlay = componentRef.instance
    overlay.opacity = opacity
    overlay.zIndex = zIndex
    overlay.visible = true

    onClick && overlay.clickOverlay.subscribe(onClick)

    overlay.afterClose.subscribe(() => {
      componentRef.destroy()
    })

    return () => {
      overlay.visible = false
    }
  }
}
