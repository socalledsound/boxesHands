let angle =0;
let offSet = 0.0;
let w=100;
 //let w=300;
let ma;
let maxD;


var PATH = 'hands/';
var  FILE = 'hands_pix_1_';
var  EXT = '.jpg';
var IMAGES = 50;
var  imgs = Array(IMAGES);
var idx = 0;

function preload() {
  for (var i = 0; i != IMAGES; imgs[i] = loadImage(PATH + FILE + ++i + EXT));
}

function setup() {
	createCanvas(1000,1000, WEBGL);
	 frameRate(15);
	ma = atan(1/sqrt(2));
	maxD = dist(0,0,200,200);
	

}

function draw() {

	 background(0);
	//ortho(-500,500,-500,500,-500,500);
	ambientLight(10,50,10);
	 directionalLight(6, 6, 5, 0, 90, 180);
	translate(0,25,-4050);
	scale(4);
	rotateY(ma);
	rotateX(-QUARTER_PI);
	

	 // translate(width/2, height/2);
	 rectMode(CENTER);

	 rotateX(angle*0.1);
	 rotateY(angle*0.1);
	 rotateZ(angle*0.1);
	rotateX(-180);
	//rotateY(90);

		
for(let z=0; z<height; z+=w) {
	for(let x=0; x<width;x+=w) {
			
			push();
			let d = dist(x,z,width/2,height/2);
			//let offSet = map(d, 0, maxD, -2,2);
			let offSet = map(d, 0, maxD, -PI,PI);
	 		let h = map(sin(angle+offSet),-1,1,0,200);
		
			translate(x - width/2, 0, z-height/2);


			// fill(220);
			stroke(10);
			//rect(x-width/2,0,20,h);
			// ambientMaterial(100);
			//specularMaterial(random(50,60)-z/20);
			//specularMaterial(random(10,20),random(10,20),random(10,20));
			//normalMaterial(200);
			texture(imgs[int(random(IMAGES))]);
			 box(w,h,w-2);
			// sphere(h/10+(w/10));
			// sphere(h/3+(w/3));

			
			pop();
		}
	}

			angle -= 0.1;

  
}



