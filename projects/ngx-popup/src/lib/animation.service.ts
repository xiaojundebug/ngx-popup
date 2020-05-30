import { Injectable } from '@angular/core'
import { AnimationBuilder } from '@angular/animations'
import { Observable } from 'rxjs'

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

    player.play()

    return new Observable(observer => {
      player.onDone(() => {
        observer.next()
      })

      return () => {
        player.destroy()
      }
    })
  }
}
