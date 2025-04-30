import React from 'react';

const ThreeDViewer = () => {
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