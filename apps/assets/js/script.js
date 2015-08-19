var pleskC = document.getElementById('Plesk');
var cpanelC = document.getElementById('cPanel')
var ipAddr = document.getElementById('ipAddress')
function emailFunct (cpanelC, pleskC){
	if (cpanelC == true){
		var cpstring = "Dear Sir or Madam,\r\n";
		document.getElementsByTagName('textarea').value = cpstring;
	} else if (pleskC == true){
		var plkstring = "Dear Sir or Madam,\r\n";
		document.getElementsByTagName('textarea').value = plkstring;
	}
}
