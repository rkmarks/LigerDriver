var pleskC = document.getElementById('Plesk');
var cpanelC = document.getElementById('cPanel')
var ipAddr = document.getElementById('ipAddress')
function emailFunct (){
	if (cpanelC == true){
		var cpstring = "Dear Sir or Madam,\n" + ""
		document.getElementsByTagName('textarea').value = cpstring;
	} else if (pleskC == true){
		var plkstring = ""
		document.getElementsByTagName('textarea').value = plkstring;
	}
}
