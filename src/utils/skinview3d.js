import * as skinview3d from 'skinview3d'

export const renderView = (skin, canvas) => {
  const render = new skinview3d.SkinViewer({
    canvas: canvas,
    width: 250,
    height: 500,
    skin: skin,
  })

  render.camera.position.x = -20
  render.controls.enableZoom = false

  return render
}

export const startAnimation = render => {
  render.animation = new skinview3d.WalkingAnimation()
}

export const pauseAnimation = render => {
  render.animation.paused = true
}

export const stopAnimation = render => {
  render.animation = null
}
