import React, { useEffect } from 'react';

const ThreeDViewer = () => {
  // Registrera Spline-viewern på klienten
  useEffect(() => {
    import('@splinetool/viewer');
  }, []);

  // Enkel WebGL-fallback
  useEffect(() => {
    const canvas = document.createElement('canvas');
    if (!canvas.getContext || !canvas.getContext('webgl')) {
      console.warn('WebGL stöds inte på den här enheten.');
    }
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50">
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
  );
};

export default ThreeDViewer;