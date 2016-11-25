// define object variables
var Portfolio,
		LoadComponents,
		Projects;

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

		var hideElems = [header, name, ptOne, ptTwo, ptThree, pageNav, sociNav, projs];

		for (i = 0; i < hideElems.length; i++) {
			hideElems[i].css("opacity", 0);
		}

		if (bool) {
			pic.css("display", "none");
		}

	},

	/*
	// extends obj properties to a new object
	"extend" : function(props, descs) {
		descs = descs || {};
		if (props) {
			var propNames = Object.getOwnPropertyNames(props);
			propNames.forEach(function(vals) {
				if (!descs.hasOwnProperty(propNames)) {
					descs[vals] = Object.getOwnPropertyDescriptor(props, vals);
				}
			})
		}
		return Object.create(this, descs);
	},
	*/

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
		}, 500); //500

		// reveal caption pt 1
		setTimeout(function() {
			LoadComponents.inCenter(ptOne)
		}, 1500); //1000

/*
		// reveal caption pt 2
		setTimeout(function() {
			LoadComponents.mainTwo(ptTwo)
		}, 2200);


		// reveal caption pt 3
		setTimeout(function() {
			LoadComponents.mainThree(ptThree)
		}, 2900);
*/

		// reveal header
		setTimeout(function() {
			LoadComponents.headBar(header)
		}, 2200); //3800


		// reveal navigation components
		setTimeout(function() {
			LoadComponents.headContent(pageNav, sociNav)
		}, 2700); // 4300

	}
}

// Contains vague funtions associated with the load sequence.
// More in depth functions are in the Portfolio object.
LoadComponents = {

	"init" : function(componentOne, componentTwo) {
		componentTwo.addClass("animate-slow fadeIn");
	},

	"inLeft" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm slideInLeftDramatic");
	},

	"inCenter" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm zoomIn");
	},

	"inRight" : function(component) {
		component.css("opacity", 1);
		component.addClass("animate-norm slideInRightDramatic");
	},

	"headBar" : function(component) {
		component.addClass("animate-fast fadeIn");
	},

	"headContent" : function(componentOne, componentTwo) {
		componentOne.css("opacity", 1);
		componentOne.addClass("animate-norm slideInLeft");
		componentTwo.css("opacity", 1);
		componentTwo.addClass("animate-norm slideInDown");
	}

}

// Hides animated elems,
// plays load sequence,
// enables scroll listening
window.onload = function() {
	mob = Portfolio.isMobile();
	Portfolio.configure(mob);
	Portfolio.loadSequence();
	Portfolio.projReveal();
}

/*
Projects ={

"getData" : function() {
	var jsonURL = 'https://raw.githubusercontent.com/zach-long/JSONs/master/portfolio_data/projects.json';
	var authentication = '?token=';
	var jsonToken = 'AQcMjH44kReG2KLtDPwdg6KHMG5sSuMoks5YKGr2wA%3D%3D';

	var path = jsonURL + authentication + jsonToken;

	$.getJSON(path, function(response) {
		var allProjects = response.projects;

		$(allProjects[0]).each(function(i, data) {
			var arrLength = data.live;

			for (i = 0; i < arrLength.length; i++) {
				console.log(createProject);
				console.log(Projects);
				Projects.createProject(data.live[i]);
			}

		});

	});
},

	"createProject" : function(data) {
		var container = $("#project-container");

		container.append(
			"<div class='project'>" +
	      "<h2>" + data[0].title + "</h2>" +
	      // this div prevents <a> overflowing into img margins
	      "<div class='offset'>" +
	        "<a href='" + data[3].link + "' target='_blank'>" +
	           "<div id='" + data[2].projAlias + "'></div>" +
	        "</a>" +
	      "</div>" +
	    "</div>"
		);
	}

}
*/
