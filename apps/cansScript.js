var ipAddr = document.getElementById('ipAddress');

function emailFunct() {
  if (ipAddr == " ") {
    alert('Please enter an IP address');
    if (document.getElementById('controlPdrop').value == "cPanel") {
     return
	var cpstring = "Dear Sir or Madam,\r\n" + ipAddr;
	document.getElementsByTagName('p').value = cpstring;
    } else if (document.getElementById('controlPdrop').value == "Plesk") {
	return
      	 var plkstring = "Dear Sir or Madam,\r\n" + ipAddr;
      	 document.getElementsByTagName('p').value = plkstring;
    } else {
      alert("Please choose a control panel");
    }
  } else {

  }
}
