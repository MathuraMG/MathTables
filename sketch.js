let r = 0;
let noPts = 300;
let points = [];
let tables = 2;
let dir = 1;

let bg = "#073B3A";
let fg = "#48A9A6";
let fg1 = "#4281A4";

fg="#EECF6D44";
fg1="#FE7F2D44";

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	angleMode(DEGREES);
  r = 0.3*width;
}
function draw() {
	background(bg);
	drawTable(tables, noPts,width/2, height/2);
}
function drawTable(tables, noPts,x,y) {
	points = [];
	translate(x,y);
	for(let i = 0;i<noPts;i++) {
		let angle = (360/noPts)*i;
		points.push({
			x: r*cos(angle),
			y: r*sin(angle)
		})
	}
	for(let i =0;i<points.length;i++) {
		noStroke();
		fill("#ffd692aa");
		ellipse(points[i].x, points[i].y, 5);
	}
	for(let i =0;i<noPts;i++) {
		let startPt = i;
		let endPt = startPt*tables%noPts;
		if(i%2===0) {
			stroke(fg);
		} else {
			stroke(fg1);
		}
		strokeWeight(3);
		line(points[startPt].x, points[startPt].y, points[endPt].x, points[endPt].y);

	}
}

function keyPressed() {
	if (keyCode === SHIFT) {
		shift = 10;
	} else if (keyCode === LEFT_ARROW) {
		if(tables >0) {
    	tables -= shift;
		}
  } else if (keyCode === RIGHT_ARROW) {
    tables += shift;
  }
}

function decreaseOne() {
  if(tables >0) {
    tables -= 1;
  }
  changeText();
}

function increaseOne() {
  tables += 1;
  changeText();
}

function decreaseTen() {
  if(tables >10) {
    tables -= 10;
  }
  changeText();
}

function increaseTen() {
  tables += 10;
  changeText();
}

function keyReleased() {
	if (keyCode === SHIFT) {
		shift = 1;
	}
}

function changeText() {
  document.getElementById('number').innerHTML = tables;
}
