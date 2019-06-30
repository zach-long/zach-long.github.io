// define object variables
var Portfolio,
	LoadComponents,
	Projects,
	MotionBG;

var mob;

Portfolio = {

	// determines if user is mobile
	// - used as determinant for firing other functions
	"isMobile" : function() {
		if (/Mobi/.test(navigator.userAgent)) {
			//console.log("isMobile set to true");
			return true;
		} else {
			//console.log("isMobile remains false");
			return false;
		}
	},

	// hides all elements so they can fade in
	// (not hidden by default in case user has JS disabled)
	// - also provides additional DOM modification if user is mobile
	// - accepts arg 'bool', whether or not user is mobile
	"configure" : function(bool) {
		var // initialize selectors
		header = $("header"),
		name = $("#me"),
		ptOne = $("#pt1"),
		ptTwo = $("#pt2"),
		ptThree = $("#pt3"),
		pageNav = $(".page-nav"),
		sociNav = $(".social-nav"),
		projs = $(".project"),
		pic = $("#profile-pic");

		var hideElems = [projs];

		for (i = 0; i < hideElems.length; i++) {
			hideElems[i].css("opacity", 0);
		}

		// if (bool) {
		// 	pic.css("display", "none");
		// }

	},

	// listens for window location and project locations
	// anytime the user scrolls, will reveal project
	// if within parameters
	"projReveal" : function() {
		var // initialize selectors
		viewField = $(window),
		listenField = $("#project-container"),
		projectField = $(".project"),
		objBottom, winBottom;

		viewField.scroll(function(event) {
			listenField.find(projectField).each(function(i){
				objBottom = $(this).offset().top + $(this).outerHeight();
				winBottom = viewField.scrollTop() + viewField.height();
				if(winBottom > objBottom) {
					$(this).addClass("fadeIn animate-norm");
				}
			});
		});

	},

	// animation sequence for when the page loads
	"loadSequence" : function() {
		var // initialize selectors
		header = $("header"),
		name = $("#me"),
		ptOne = $("#pt1"),
		ptTwo = $("#pt2"),
		ptThree = $("#pt3"),
		pageNav = $(".page-nav"),
		sociNav = $(".social-nav");

		// hide name and header
		setTimeout(function() {
			LoadComponents.init(header, name);
		}, 1000); //500

		// reveal caption pt 1
		setTimeout(function() {
			LoadComponents.inCenterSlow(ptOne)
		}, 2500); //1000


		// reveal caption pt 2
		setTimeout(function() {
			LoadComponents.inCenterSlow(ptTwo)
		}, 3500);


/* 		// reveal caption pt 3
		setTimeout(function() {
			LoadComponents.mainThree(ptThree)
		}, 2900); */


		// reveal header
		setTimeout(function() {
			LoadComponents.headBar(header)
		}, 5000); //3800


		// reveal navigation components
		setTimeout(function() {
			LoadComponents.headContent(pageNav, sociNav)
		}, 5500); // 4300

	}
}

// Contains vague funtions associated with the load sequence.
// More in depth functions are in the Portfolio object.
LoadComponents = {

	"init" : function(componentOne, componentTwo) {
		// componentOne.addClass("animate-slow fadeIn");
		componentTwo.addClass("animate-slow fadeIn");
	},

	"inLeft" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm slideInLeftDramatic");
	},

	"inCenter" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm fadeIn");
	},

	"inCenterSlow" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-slow fadeIn");
	},

	"inRight" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm slideInRightDramatic");
	},

	"headBar" : function(component) {
		component.addClass("animate-norm fadeIn");
	},

	"headContent" : function(componentOne, componentTwo) {
		componentOne.css("opacity", 1);
		componentOne.addClass("animate-norm slideInLeft");
		componentTwo.css("opacity", 1);
		componentTwo.addClass("animate-norm slideInDown");
	}

}

MotionBG = {
	"init" : function() {

		// define canvas
		var canvas = document.createElement('canvas'),
			context = canvas.getContext('2d');

		var bg = document.getElementsByClassName('background');
		bg = bg[0];
		
		w = canvas.width = window.innerWidth;
		h = canvas.height = window.innerHeight;
		
		bg.appendChild(canvas);
		
		// particle parameters
		pCount = 0;
		var particles = {},
			pIndex = 0,
			settings = {
				density: 20,
				pSize: 2,
				gravity: 0,
				floor: canvas.height,
				leftWall: canvas.width * 0.1,
				rightWall: canvas.width
			}
		
		// particle origin and velocity
		function Particle() {
			this.x = Math.random() * w;
			this.y = Math.random() * h;
			
			switch (Math.floor(Math.random() * 4)) {
			case 0:
				this.vx = .025;
				this.vy = .025;
				break;
			case 1:
				this.vx = -.025;
				this.vy = -.025;
				break;
			case 2:
				this.vx = -.025;
				this.vy = .025;
				break;
			case 3:
				this.vx = .025;
				this.vy = -.025;
				break;
			}
		
			pIndex ++;
			particles[pIndex] = this;
			//this.id = pIndex;
			//this.life = 0;
			//this.maxLife = 500;
		}
		
		// motion and particle size & color
		Particle.prototype.draw = function() {
			this.x += this.vx;
			this.y += this.vy;
		
			//this.life++;
			//if (this.life >= this.maxLife) {
			//  delete particles[this.id];
			//}
			context.beginPath();
			context.fillStyle = "#b30000";
			context.arc(this.x, this.y, settings.pSize, 0, Math.PI*2, true); 
			context.closePath();
			context.fill();
			//context.clearRect(settings.leftWall, settings.groundLevel, w, h);
			//context.fillStyle = '#b30000';
			//context.fillRect(this.x, this.y, 5, 5);
			
		}
		
		function float() {
			// var grd = context.createRadialGradient(w/2, h/2, 0, w/2, h/2, w);
			// grd.addColorStop(0, '#f2f2f2');
			// grd.addColorStop(1, '#333');
			// context.fillStyle = grd;
			// context.fillRect(0, 0, w, h);
		
			for (var i in particles) {
			particles[i].draw();
			}
		}
		
		// canvas background and particle spawn
		var spawn = setInterval(function() {
			// var grd = context.createRadialGradient(w/2, h/2, 0, w/2, h/2, w);
			// grd.addColorStop(0, '#f2f2f2');
			// grd.addColorStop(1, '#333');
			// context.fillStyle = grd;
			// context.fillRect(0, 0, w, h);
			if (pCount >= 500) {
			clearInterval(spawn);
			setInterval(float, 10);
			}
			for (var i = 0; i < settings.density; i++) {
			if (Math.random() > .8) {
				new Particle();
				pCount += 1;
			}
		
			}
			for (var i in particles) {
			particles[i].draw();
			}
		}, 10);

	}
}

// Hides animated elems,
// plays load sequence,
// enables scroll listening
window.onload = function() {
	// simulate loading delay
	mob = Portfolio.isMobile();
	Portfolio.configure(mob);
	// MotionBG.init();
	// Portfolio.loadSequence();
	Portfolio.projReveal();
}
hljs.initHighlightingOnLoad();