import React, { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string
        'loading-anim-type'?: string
        'events-target'?: string
        'camera-position'?: string
        'camera-target'?: string
        'background-color'?: string
        loading?: string
        antialiasing?: string
        quality?: string
      }
    }
  }
}

function ThreeDViewer(): JSX.Element {
  useEffect(() => { import('@splinetool/viewer') }, [])
  useEffect(() => {
    const canvas = document.createElement('canvas')
    if (!canvas.getContext || !canvas.getContext('webgl'))
      console.warn('WebGL stöds inte på den här enheten.')
  }, [])
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center">
      <spline-viewer 
        url="https://prod.spline.design/Uih2BYxUIKsaely2/scene.splinecode" 
        className="w-full h-full"
        loading-anim-type="spinner-big-dark"
        events-target="global"
        camera-position="[0,0,5]"
        camera-target="[0,0,0]"
        background-color="transparent"
        loading="lazy"
        antialiasing="true"
        quality="high"
      />
    </div>
  )
}

export { ThreeDViewer } 