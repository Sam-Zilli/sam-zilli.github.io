// let allVines = [];
// let maxSegments = 200;
// // let textGraphic;

// let cnv;

// function setup() {
//   cnv = createCanvas(windowWidth, windowHeight);
//   cnv.style('z-index', '-1'); // move canvas behind the text
//   cnv.position(0, 0); // make sure it's positioned correctly
//   frameRate(30);
//   startNewVine();
//   // background(220, 240, 255); // icy blue
// }


// function draw() {
//   // Frosty translucent white layer
//   noStroke();
//   // fill(255, 255, 255, 5); // subtle frost
//   rect(0, 0, width, height);

//   // Cold glow spots
//   for (let vine of allVines) {
//     let last = vine.segments[vine.segments.length - 1];
//     drawColdGlow(last.x, last.y);
//   }

//   for (let vine of allVines) {
//     vine.update();
//     vine.display();
//   }

//   allVines = allVines.filter(v => !v.finished);

//   if (allVines.length === 0) {
//     startNewVine();
//   }

//   // image(textGraphic, 0, 0);
// }

// function drawColdGlow(x, y) {
//   noStroke();
//   for (let r = 30; r > 0; r -= 5) {
//     fill(180, 220, 255, map(r, 30, 0, 5, 0)); // soft icy blue fade
//     ellipse(x, y, r * 2);
//   }
//   fill(0,0,0, 0);
// }

// // function createTextGraphic() {
// //   textGraphic = createGraphics(width, height);
// //   textGraphic.pixelDensity(1);
// //   textGraphic.background(255, 255, 255, 0);
// //   textGraphic.textSize(100);
// //   textGraphic.textAlign(CENTER, CENTER); 
// //   textGraphic.fill(180, 220, 255, 120); // soft icy blue
// //   textGraphic.textFont("Georgia");
// //   textGraphic.text("SAM ZILLI", width / 2, height / 2);
// // }

// function startNewVine() {
//   allVines.push(new Vine(random(width), height));
// }

// function windowResized() {
//   // resizeCanvas(windowWidth, windowHeight);
//   // createTextGraphic();
//   // background(220, 240, 255);
// }

// class Vine {
//   constructor(startX, startY) {
//     this.segments = [];
//     this.finished = false;
//     this.segments.push(new VineSegment(startX, startY, -PI / 2));
//   }

//   update() {
//     if (this.segments.length >= maxSegments || this.isOffScreen()) {
//       this.finished = true;
//       return;
//     }

//     let last = this.segments[this.segments.length - 1];
//     let newSegment = last.branch();
//     this.segments.push(newSegment);
//   }

//   isOffScreen() {
//     let last = this.segments[this.segments.length - 1];
//     return last.x < 10 || last.x > width - 10 || last.y < 10;
//   }

//   display() {
//     for (let seg of this.segments) {
//       seg.display();
//     }
//   }
// }

// class VineSegment {
//   constructor(x, y, angle) {
//     this.x = x;
//     this.y = y;
//     this.angle = angle;
//     this.length = 10;
//   }

//   branch() {
//     let angleVariation = random(-0.3, 0.3);
//     let newAngle = this.angle + angleVariation;
//     let newX = this.x + cos(newAngle) * this.length;
//     let newY = this.y + sin(newAngle) * this.length;
//     return new VineSegment(newX, newY, newAngle);
//   }

//   display() {
//     stroke(150, 180, 200, 200); // icy crack color
//     strokeWeight(1.5);
//     let newX = this.x + cos(this.angle) * this.length;
//     let newY = this.y + sin(this.angle) * this.length;
//     line(this.x, this.y, newX, newY);
//   }
// }
