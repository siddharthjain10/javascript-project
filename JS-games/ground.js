import {incrementCustomProperty, setCustomProperty,getCustomProperty} from './updateCustomProperty.js';

const groundEles = document.querySelectorAll('[data-ground]');
const SPEED = 0.05;


export function setupGround(){
    setCustomProperty(groundEles[0], '--left', 0);
    setCustomProperty(groundEles[1], '--left', 300);
}

export function updateGround(delta, speedscale){
    groundEles.forEach(ground => {
        incrementCustomProperty(ground, "--left",delta*SPEED*speedscale*-1);

        if(getCustomProperty(ground, '--left') <= -300){
            incrementCustomProperty(ground, '--left', 600);
        }
    })
}
