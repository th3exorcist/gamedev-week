let image_bg;
let image_ch;
let image_enemy;
let bg;
let music;

function preload() {
 
  image_bg = loadImage('imagens/cenario/floresta.png');
  image_ch = loadImage('imagens/personagem/correndo.png');
  music = loadSound ('sons/som.mp3');
  
  
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    bg = create_bg(image_bg, 3);
    music.loop();
    ch = Character(image_ch);
}

function draw() {
  bg.show();
  bg.move();
  ch.show();
}


class create_bg {
  
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }
  
  show() {
      background(this.img, this.x1, 0, width, height);
      background(this.img,this.x2, 0, width, height);
  }
  
  move() {
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;
    
    if(this.x1 < -width){
       this.x1 = width;
       
       }
    
       if(this.x2 < -width){
       this.x2 = width;
       
       }
  }
}

class Character {
  
    constructor(img) {
    this.img = img;
    this.matrix = matrix;
  }
  
  show() {
    image(image_ch, 0, height-135, 110,135, 0, 0, 210, 270);
  }
  
  move() {
    this.frameA++;
  }
}
