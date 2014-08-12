'use strict';
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// initial clock readout
$('#clock').text(hours + ':' + minutes + ':' + seconds);

$(function(){
	// set clock time on load
	var currentTime = new Date();
	var paper = Raphael("canvas", 1100, 500);

	function theTime(){
		//check current time stamp
		var currentTime = new Date();
		// assign hours, minutes, seconds for easier accessibility
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		$('#clock').text(hours + ':' + minutes + ':' + seconds);

		// clear paper object and re-write every loop
		paper.clear();

		// increase exponentially
		var mini = seconds*seconds;

		// check seconds in dev tools
		console.log('seconds are: ' + seconds);

		// define size of inner triangle
		var rec = paper.rect(5,225,seconds * 15,50);

		rec.attr('stroke-width', 0);
		rec.attr('fill', 'rgb(223, 70, 70)');
		console.log('this width of the box is: ' + seconds*15 + 'px');

		var bigRec = paper.rect(5,225,890,50);
		bigRec.attr('stroke', '#999');
		bigRec.attr('stroke-width', '5px');
	}

	// repeats every 1000ms
	setInterval(theTime, 1000);

	// section two
	var paperTwo = Raphael('canvasTwo',500,500);

	function aCircle(){

		// setup time math
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		// need to clear raphael object each time it's called
		paperTwo.clear();

		// outside circle
		// 236px is the max width the circle
		var circleBig = paperTwo.circle(250,250, 238);
		circleBig.attr('stroke', "#999");
		circleBig.attr("stroke-width", 10);

		// inner circle
		// define size of circle and grows dynamically depending on seconds value
		var circle = paperTwo.circle(250,250, seconds * 4);

		// fun conditional logic to flip between odd/even seconds value
		if (seconds % 2 === 0 ) {
			circle.animate({fill: "rgb(223, 70, 70)", stroke: "#999"},500);
		} else {
			circle.animate({fill: "#223fa3", stroke: "#999"},500);
		}

		// check dev tools to see if this value is working as it should
		console.log('width of small circle is: ' + seconds*4 + 'px');
		circle.attr("fill","rgb(223,70,70)");

		circle.attr("stroke", "#fff");
	}
	// sets time delay of 1000ms
	setInterval(aCircle, 1000);

	// section three
	var paperThree = Raphael('canvasThree',500,500);

});