import { setCustomProperty, getCustomProperty, incrementCustomProperty } from './updateCustomProperty.js';

const dinoEle = document.querySelector('[data-dino]');
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;


let isJumping, currentFrameTime, dinoFrame, yVelocity;

export function setupDino(){
    setCustomProperty(dinoEle, '--bottom', 0);
    isJumping = false;
    dinoFrame = 0;
    currentFrameTime = 0;
    yVelocity = 0;
    setCustomProperty(dinoEle, '--bottom', 0);
    document.removeEventListener('keydown', onJump)
    document.addEventListener('keydown',onJump)
}

export function updateDino(delta, speedscale){
    handleRun(delta, speedscale);
    handleJump(delta);
}

export function setDinoLose(){
    dinoEle.src='imgs/dino-lose.png';
}

function handleRun(delta, speedscale){
    if(isJumping){
        dinoEle.src='imgs/dino-stationary.png';
        return;
    }

    if(currentFrameTime>= FRAME_TIME){
        dinoFrame = (dinoFrame+1)%DINO_FRAME_COUNT;
        dinoEle.src = `imgs/dino-run-${dinoFrame}.png`
        currentFrameTime -= FRAME_TIME;
    }
    currentFrameTime+= delta * speedscale;
}

export function getDinoRect(){
    return dinoEle.getBoundingClientRect();
}

function handleJump(delta){
    if(!isJumping) return;

    incrementCustomProperty(dinoEle, '--bottom', yVelocity*delta);

    if(getCustomProperty(dinoEle, '--bottom')<=0){
        setCustomProperty(dinoEle, '--bottom', 0);
        isJumping = false;
    }

    yVelocity-= delta * GRAVITY;
}

function onJump(e){
    if(e.code !== 'Space' || isJumping) return;

    yVelocity = JUMP_SPEED;
    isJumping = true;
}
