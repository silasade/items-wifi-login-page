import { gsap } from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import React, { useEffect, useRef } from 'react';
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

function Title(){
    const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(elementRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 3, ease: 'power4.out' });
    
    return () => {
      gsap.to(elementRef.current, { x: -100, opacity: 0, duration: 1, ease: 'power2.in' });
    };
    
  }, []);
    var styles={
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "5%",
        color: "#7f8385",
        margin:"0"
    }
    var sty={
        color:"red"
    }
    return(
        < div style={styles}>
        <h1 >HOTSPOT LOGIN</h1>
        <h6 style={sty} ref={elementRef} className="h5">Celebrating UI @ 75 years &#x1F388;</h6>

        </div>
    )
}
export default Title