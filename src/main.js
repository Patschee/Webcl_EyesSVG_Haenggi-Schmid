import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");




// eslint-disable-next-line no-unused-vars
const v  = 14; // versatz - Abstand des Pupillenzentrums vom Augenzentrum in SVG units


const eyeBinding = eyeId => {
    const rect          = document.querySelectorAll(eyeId + "_iris ellipse")[0].getBoundingClientRect();
    const iris          = document.querySelector(eyeId + "_iris");
    const closeLidLayer = document.querySelector(eyeId + "_closeLid");
    closeLidLayer.style.opacity = 0;

    setInterval( function(){
            if (closeLidLayer.style.opacity === '1') return; // do not close and then open if already closed
            closeLidLayer.style.opacity = '1';
            setTimeout(function(){  closeLidLayer.style.opacity = '0', 300})}
        , 7 * 1000);

    const xo = rect.x + rect.width/2;  // x-origin
    const yo = rect.y + rect.height/2; // y-origin

    document.querySelector(eyeId).onclick = function(){
        closeLidLayer.style.opacity = (closeLidLayer.style.opacity === '1') ? '0' : '1'};

    return evt => {
        const xm = evt.clientX - xo; // the normalized x/y coords to work with
        const ym = evt.clientY - yo;

        const xmax = rect.width/1.5;
        const ymax = rect.height/2;

        const widestFocus = 400; // when x is so far away, the eye is maximal extended
        const scaledX = xm * (xmax / widestFocus );
        let   xe = xm > 0
            ? Math.min( xmax, scaledX)
            : Math.max(-xmax, scaledX);
        const scaledY = ym * (ymax / widestFocus );
        let   ye = ym > 0
            ? Math.min( ymax, scaledY)
            : Math.max(-ymax, scaledY);
        if (xe*xe + ye*ye > xmax * ymax) {
            xe *= 0.9;
            ye *= 0.9;
        }
        iris.style.transform = `translateX(${xe}px) translateY(${ye}px)`;
    }
};

const leftListener  = eyeBinding('#leftEye');
const rightListener = eyeBinding('#rightEye');



//Option 1
// document.addEventListener('click', evt => { // highlander pattern
//   leftListener(evt),  rightListener(evt)
// });

document.onmousemove = evt => { // highlander pattern
    leftListener(evt);
    rightListener(evt);
}
