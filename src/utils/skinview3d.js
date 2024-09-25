import * as skinview3d from 'skinview3d'

export const renderView = (skin, canvas) => {
  const render = new skinview3d.SkinViewer({
    canvas: canvas,
    width: 240,
    height: 480,
    skin: skin,
  })
  initializePosition(render)

  return render
}

const initializePosition = render => {
  render.camera.position.x = -20
  render.camera.position.y = 0
  render.camera.position.z = 30
  render.controls.enableZoom = false
  render.zoom = 0.85
}

export const startAnimation = render => {
  render.animation = new skinview3d.WalkingAnimation()
}

export const pauseAnimation = render => {
  render.animation.paused = true
}

export const stopAnimation = render => {
  render.animation = null
  initializePosition(render)
}
