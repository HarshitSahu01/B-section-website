import { useEffect } from "react";
import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
import '../Stylesheets/Cursor.module.css';

const ParticleCursor = () => {
    useEffect(() => {
        const appElement = document.getElementById('app'); 
        if (appElement) {
            const pc = particlesCursor({
                el: appElement,
                gpgpuSize: 512,
                colors: [0x00ff00, 0x0000ff], 
                color: 0xff0000, 
                coordScale: 0.5, 
                noiseIntensity: 0.005, 
                noiseTimeCoef: 0.0001,
                pointSize: 5, 
                pointDecay: 0.02, 
                sleepRadiusX: 50, 
                sleepRadiusY: 50, 
                sleepTimeCoefX: 0.0005, 
                sleepTimeCoefY: 0.0005  
            });

            // Log uniforms to check initialization
            console.log(pc.uniforms); 

            // Click effect
            const handleClick = () => {
                if (pc.uniforms) {
                    if (pc.uniforms.uSleepRadiusX) {
                        pc.uniforms.uSleepRadiusX.value = 5 + Math.random() * 5; 
                    }
                    if (pc.uniforms.uSleepRadiusY) {
                        pc.uniforms.uSleepRadiusY.value = 5 + Math.random() * 5; 
                    }
                    if (pc.uniforms.uNoiseIntensity) {
                        pc.uniforms.uNoiseIntensity.value = 0.05; 
                    }
                    if (pc.uniforms.uPointSize) {
                        pc.uniforms.uPointSize.value = 5; 
                    }
                    if (pc.uniforms.uColor) {
                        pc.uniforms.uColor.value.set(Math.random() * 0xffffff); 
                    }

                    setTimeout(() => {
                        if (pc.uniforms.uPointDecay) {
                            pc.uniforms.uPointDecay.value = 0.03; 
                        }
                        if (pc.uniforms.uSleepRadiusX) {
                            pc.uniforms.uSleepRadiusX.value = 5; 
                        }
                        if (pc.uniforms.uSleepRadiusY) {
                            pc.uniforms.uSleepRadiusY.value = 5; 
                        }
                        if (pc.uniforms.uNoiseIntensity) {
                            pc.uniforms.uNoiseIntensity.value = 0.006; 
                        }
                        if (pc.uniforms.uPointSize) {
                            pc.uniforms.uPointSize.value = 5; 
                        }
                    }, 300); 
                } else {
                    console.error("Uniforms are not defined in particlesCursor");
                }
            };

            // Attach click event listener to the window
            window.addEventListener('click', handleClick);

            // Cleanup function
            return () => {
                window.removeEventListener('click', handleClick);
            };
        } else {
            console.error("Element with id 'app' not found.");
        }
    }, []);

    return null; // This component doesn't render anything visually
};

export default ParticleCursor;
