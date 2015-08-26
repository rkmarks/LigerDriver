var ipAddr = document.getElementById('ipAddress');

function emailFunct() {
  if (ipAddr == " ") {
    alert('Please enter an IP address');
    if (document.getElementById('controlPdrop').value == "cPanel") {
      var cpstring = "Dear Sir or Madam,\r\n" + ipAddr;
      document.getElementsByTagName('textarea').value = cpstring;
    } else if (document.getElementById('controlPdrop').value == "Plesk") {
      var plkstring = "Dear Sir or Madam,\r\n" + ipAddr;
      document.getElementsByTagName('textarea').value = plkstring;
    } else {
      alert("Please choose a control panel");
    }
  } else {

  }
}
