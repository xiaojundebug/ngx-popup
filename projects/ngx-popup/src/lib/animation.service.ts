import { Injectable } from '@angular/core'
import { AnimationBuilder } from '@angular/animations'
import { Observable, Subscriber } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor(private builder: AnimationBuilder) {}

  makeAnimation(element: any, animation: any) {
    // first define a reusable animation
    const myAnimation = this.builder.build(animation)

    // use the returned factory object to create a player
    const player = myAnimation.create(element)
    let obs: Subscriber<any>

    player.play()

    player.onDone(() => {
      if (obs) {
        obs.next()
        obs.complete()
      } else {
        destroy()
      }
    })

    function destroy() {
      try {
        player.destroy()
      } catch (e) {}
    }

    return new Observable<any>(observer => {
      obs = observer
      return () => {
        destroy()
      }
    })
  }
}
