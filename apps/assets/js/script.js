var sharedCount = 0;
var serverCount = 0;

var changeCount = function(type,amount){
	switch(type){
    case 'server':
			/*
      serverCount+=amount;
      document.getElementById('serverQty').value = serverCount;
			*/
			$('#serverQty').val(serverCount+=amount);
      break;
    case 'shared':
			/*
      sharedCount+=amount;
      document.getElementById('sharedQty').value = sharedCount;
			*/
			$('#sharedQty').val(sharedCount+=amount);
      break;
  }
}


$(document).ready(function(){
  $('form').click(function(e) {
    console.log(e);
    e.preventDefault(); // stop your form from refreshing the page
  });

});
