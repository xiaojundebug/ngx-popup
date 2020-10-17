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

export interface OverlayOptions {
  opacity: number
  zIndex?: number
  onClick?: () => void
  getContainer?: () => HTMLElement
}

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class OverlayHelper {
  constructor(
    private appRef: ApplicationRef,
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(options: OverlayOptions) {
    const opts = Object.assign(this.getDefaultOptions(), options)
    const { opacity, zIndex, getContainer } = opts

    const factory = this.cfr.resolveComponentFactory(OverlayComponent)
    const componentRef = factory.create(this.injector)
    this.appRef.attachView(componentRef.hostView)

    const { nativeElement } = componentRef.location
    const container = getContainer()
    container.insertBefore(nativeElement, container.firstChild)

    const inst = componentRef.instance
    inst.opacity = opacity
    inst.zIndex = zIndex
    inst.visible = true

    this.setListener(componentRef, opts)

    return () => {
      inst.visible = false
    }
  }

  private getDefaultOptions(): OverlayOptions {
    return {
      opacity: 0.5,
      getContainer: () => document.body
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
