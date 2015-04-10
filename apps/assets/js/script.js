var sharedCount = 0;
var serverCount = 0;

		var changeCount = function(type,amount){
		    switch(type){
		        case 'server':
		            serverCount+=amount;
		            document.getElementById('serverQty').value = serverCount;
		            break;
		        case 'shared':
		            sharedCount+=amount;
		            document.getElementById('sharedQty').value = sharedCount;
		            break;
		    }
		}
