var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
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
		
		paper.clear();
		var mini = seconds*seconds;
		console.log('seconds are: ' + seconds);
		var rec = paper.rect(5,225,seconds*15,50);
		rec.attr('stroke-width', 0);
		//rec.attr('stroke', '#555');
		rec.attr('fill', 'rgb(223, 70, 70)');
		console.log('this width of the box is: ' + seconds*15 + 'px');

		var bigRec = paper.rect(5,225,890,50);
		bigRec.attr('stroke', '#999');
		bigRec.attr('stroke-width', '5px');

	}


	setInterval(theTime, 1000);

// section two

	var paperTwo = Raphael('canvasTwo',500,500);



	function aCircle(){


		// setup time math
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		paperTwo.clear();
		// outside circle
		// 236 is the max width the circle gets on 59
		var circleBig = paperTwo.circle(250,250, 238);
		circleBig.attr('stroke', "#999");
		circleBig.attr("stroke-width", 10);

		// inner circle
		var circle = paperTwo.circle(250, 250, seconds*4);

		if (seconds % 2 === 0 ) {
			circle.animate({fill: "rgb(223, 70, 70)", stroke: "#999"}, 500);
		} else {
			circle.animate({fill: "#223fa3", stroke: "#999"}, 500);
		}

		console.log('width of small circle is: ' + seconds*4 + 'px');
		circle.attr("fill", "rgb(223, 70, 70)");

		circle.attr("stroke", "#fff");
	}

	setInterval(aCircle, 1000);

	// section three

	var paperThree = Raphael('canvasThree',500,500);




});