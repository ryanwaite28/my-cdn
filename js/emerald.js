$(document).ready(function(){
	
	var thCenter = $('.th-center');
	
	thCenter.css({
		'line-height': thCenter.parent('div').height() + 'px',
	});
	
	$(window).resize(function(){
		thCenter.css({
			'line-height': thCenter.parent('div').height() + 'px',
		});
	})
	
})

// Shuffle Array
function shuffleArray(array) {
    var input = $.type(array);
    
    if( array == undefined || input != "array" ) { 
    	console.log("Error - Input Is Either Empty Or Not An Array Object."); 
    	return;
    }
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function flash_msg(id, msg) {
  if(id == undefined) {throw new Error('element id was not given');}
  if(msg == undefined) {throw new Error('msg was not given');}
  document.getElementById(id).innerHTML = msg;

  setTimeout(function(){
    document.getElementById(id).innerHTML = '';
  } , 3000);
}

Date.prototype.addDays = function(days) {
			var dat = new Date(this.valueOf())
			dat.setDate(dat.getDate() + days);
			return dat;
		}

		Date.prototype.backDays = function(days) {
			var dat = new Date(this.valueOf())
			dat.setDate(dat.getDate() - days);
			return dat;
		}

		function getDates(startDate, stopDate) {
			var dateArray = [];
			var currentDate = startDate;
			while (currentDate <= stopDate) {
				dateArray.push(new Date(currentDate))
				currentDate = currentDate.addDays(1);
			}
			// console.log(dateArray);
			return dateArray;
		}


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
