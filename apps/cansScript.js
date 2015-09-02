emailFunct = function(ipAddr, usrNme) {
  var ipAddr = document.getElementById('ipAddress').value;
  if (!ipAddr) {
    alert("Please enter an IP address and your name.");
  } else {
    if (document.getElementById('controlPdrop').value == "cPanel") {
      var cpStrg = "Valued Customer,\n\tThank you for your purchase of Managed Services." + ipAddr;
      document.getElementById('canHtml').innerHTML = cpStrg;
    }
    else if (document.getElementById('controlPdrop').value == "Plesk") {
        var plkStrg = "Valued Customer,\n\tThank you for your purchase of Managed Services." + ipAddr;
        document.getElementById('canHtml').innerHTML = plkStrg;
      } else {
        alert("Please choose a control panel");
      }
    }
};
