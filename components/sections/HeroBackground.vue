<script setup lang="ts">
/**
 * Flowing contour lines — a topographic/signal-field visualization.
 * Distinctly different from a wireframe mesh: horizontal wave lines stack
 * from mid-canvas downward, each animated with overlapping sine phases.
 * Evokes "user flows", "data signals", and "design systems" — on-brand for
 * a UX portfolio without being a generic WebGL gimmick.
 */

const canvasRef = ref<HTMLCanvasElement | null>(null)

let rafId: number
let t = 0
let dpr = 1

const isDarkMode = () => document.documentElement.classList.contains('dark')

function setSize(canvas: HTMLCanvasElement) {
  dpr = Math.min(window.devicePixelRatio, 1.5)
  canvas.width  = canvas.offsetWidth  * dpr
  canvas.height = canvas.offsetHeight * dpr
}

function draw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Logical CSS dimensions
  const W = canvas.width  / dpr
  const H = canvas.height / dpr

  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, W, H)

  const dark = isDarkMode()
  // Warm stone in both modes — darker in light mode so lines stand out on cream bg
  const [r, g, b] = dark ? [155, 142, 132] : [105, 90, 75]

  const LINE_COUNT  = 36
  const yStart = H * 0.42         // first line at ~42 % down
  const yEnd   = H * 1.06         // last line exits below canvas
  const spacing = (yEnd - yStart) / (LINE_COUNT - 1)
  const STEP    = Math.ceil(W / 220) + 1  // ~220 sample points across width

  for (let i = 0; i < LINE_COUNT; i++) {
    const progress = i / (LINE_COUNT - 1)  // 0 → 1 top to bottom
    const baseY = yStart + i * spacing

    // Opacity ramps from near-invisible at the top to solid at the bottom
    const alpha = (0.05 + progress * 0.28) * (dark ? 1.25 : 1.0)

    // Amplitude grows toward the bottom — stronger waves lower down
    const amp1 = H * (0.022 + progress * 0.026)
    const amp2 = H * (0.012 + progress * 0.014)
    const amp3 = H * (0.006 + progress * 0.007)

    // Each line has its own phase offset so they ripple independently
    const ph = progress * Math.PI * 4.2

    ctx.beginPath()
    ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`
    ctx.lineWidth = 0.85

    for (let x = 0; x <= W + STEP; x += STEP) {
      const nx = x / W
      const y = baseY
        + Math.sin(t * 0.72 + nx * 5.0 + ph) * amp1
        + Math.sin(t * 0.44 + nx * 8.5 + ph * 1.5) * amp2
        + Math.sin(t * 1.10 + nx * 3.2 + ph * 0.8) * amp3

      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  ctx.restore()
}

function animate() {
  rafId = requestAnimationFrame(animate)
  t += 0.007
  const canvas = canvasRef.value
  if (canvas) draw(canvas)
}

function onResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  setSize(canvas)
}

onMounted(() => {
  const canvas = canvasRef.value!
  setSize(canvas)
  animate()
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="hero-canvas"
    aria-hidden="true"
  />
</template>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  display: block;
}
</style>
