import {
  Injectable,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  Inject,
  ComponentRef
} from '@angular/core'
import { OverlayComponent } from './overlay.component'
import { DOCUMENT } from '@angular/common'
import { Subscription } from 'rxjs'

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
    const { opacity = 0.5, zIndex } = opts

    const factory = this.cfr.resolveComponentFactory(OverlayComponent)
    const componentRef = factory.create(this.injector)
    this.appRef.attachView(componentRef.hostView)

    const { nativeElement } = componentRef.location
    this.document.body.insertBefore(nativeElement, this.document.body.firstChild)

    const inst = componentRef.instance
    inst.opacity = opacity
    inst.zIndex = zIndex
    inst.visible = true

    this.setListener(componentRef, opts)

    return () => {
      inst.visible = false
    }
  }

  private setListener(componentRef: ComponentRef<OverlayComponent>, opts: OverlayOptions) {
    const inst = componentRef.instance
    const subs = new Subscription()
    const { onClick } = opts

    subs.add(
      inst.afterClose.subscribe(() => {
        componentRef.destroy()
      })
    )
    if (onClick) {
      subs.add(
        inst.clickOverlay.subscribe(() => {
          onClick()
        })
      )
    }

    componentRef.onDestroy(() => {
      subs.unsubscribe()
    })
  }
}
