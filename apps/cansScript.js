emailFunct = function(ipAddr, usrNme) {
  var ipAddr = document.getElementById('ipAddress').value;
  if (!ipAddr) {
    alert("Please enter an IP address");
  } else {
    if (document.getElementById('controlPdrop').value == "cPanel") {
      var cpStrg = "Valued Customer,\n\t" + "Thank you for your purchase of Managed Services." + ipAddr;
      document.getElementById('txtCan').value = cpStrg;
    }
    else if (document.getElementById('controlPdrop').value == "Plesk") {
        var plkStrg = "Valued Customer,\n\n\t" + "Thank you for your purchase of Managed Services." + ipAddr;
        document.getElementById('txtCan').value = plkStrg;
      }
      else {
        alert("Please choose a control panel");
      }
    }
};

resetFunct = function() {
  document.getElementById('canForm').reset();
}
