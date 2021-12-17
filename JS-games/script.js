import { updateGround, setupGround } from './ground.js';
import { updateDino, setupDino, getDinoRect, setDinoLose } from './dino.js';
import { updateCactus, setupCactus, getCactusRects } from './cactus.js';

const WORLD_WIDTH = 100,
  WORLD_HEIGHT = 30,
  SPEED_SCALE_INCREASE = 0.00001;

const worldEle = document.querySelector("[data-world]");
const scoreEle = document.querySelector("[data-score]");
const startScreenEle = document.querySelector("[data-start-screen]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
window.addEventListener("keydown", handleStart, {once: true});

let lastTime, speedscale, score;
function update(time){
  if(lastTime==null){
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;
  updateGround(delta,speedscale);
  updateDino(delta,speedscale);
  updateCactus(delta,speedscale);
  updateSpeedscale(delta);
  updateScore(delta);

  if(checkLose()) return handleLose();

  lastTime = time;
  window.requestAnimationFrame(update);
}

function checkLose(){
  const dinoRect = getDinoRect();
  return getCactusRects().some(rect => isCollision(rect, dinoRect));
}

function isCollision(rect1, rect2){
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom && 
    rect1.right > rect2.left && 
    rect1.bottom > rect2.top
  )
}

function updateSpeedscale(delta){
  speedscale += delta * SPEED_SCALE_INCREASE;
}
function updateScore(delta){
  score += delta * 0.01;
  scoreEle.textContent = parseInt(score);
}

function handleStart(){
  startScreenEle.classList.add('hide');
  lastTime = null;
  speedscale = 1;
  score = 0;
  setupGround();
  setupDino();
  setupCactus();
  window.requestAnimationFrame(update);
}


function handleLose(){
  setDinoLose();
  setTimeout(() => {
    document.addEventListener('keydown', handleStart, {once:true});
    startScreenEle.classList.remove('hide');
  },100)
}

function setPixelToWorldScale() {
  let worldtoPixelScale = window.innerHeight / WORLD_HEIGHT;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldtoPixelScale = window.innerWidth / WORLD_WIDTH;
  }

  worldEle.style.width = `${worldtoPixelScale * WORLD_WIDTH}px`;
  worldEle.style.height = `${worldtoPixelScale * WORLD_HEIGHT}px`;
}