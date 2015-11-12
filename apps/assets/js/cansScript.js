/*
This is the main js script for the Managed Cans application
Author: Rick Markins
*/
//main form function
emailFunct = function(ipAddr, usrNme) {
  var ipAddr = document.getElementById('ipAddress').value;
  if (!ipAddr) {
    alert("Please enter an IP address");
  } else {
    if (document.getElementById('controlPdrop').value == "cPanel") {
      var cpStrg = "Valued Customer,\n\n" + "I am writing to thank you for your recent Fully Managed Server purchase. We are available 24 hours a day, 7 days a week to assist you. Your server is now available and online. You can log into cPanel by accessing your My Account page, expanding the \"Servers\" section, clicking Manage next to your server, then clicking the green \"Manage Server\" button.  You can also access WHM/cPanel directly by going to the following URL \"https://" + ipAddr + ":2087\" and logging in with the username \"root\" and the password you setup during the server setup\n.As part of the Fully Managed plan, we provide an orientation of your server over the telephone if needed. Please call us at anytime at 480-366-3310. This will take approximately 30 to 45 minutes, and cover the important aspects of your server and any initial questions you may have.\n\nOur Fully Managed Server package offers several resources to help you get started:\n\n- <a href=\"http://support.godaddy.com\" class=\"external-link\" rel=\"nofollow\">Online Help Center<\\/a>\n- 24/7 Phone Support 480-366-3310\n\nPlease reach out to us with any questions.\n\n\nBest regards,\n" + agentName + "\nManaged Services";
      document.getElementById('txtCan').value = cpStrg;
    } else if (document.getElementById('controlPdrop').value == "Plesk") {
      var plkStrg = "Valued Customer,\n\n\t" + "I am writing to thank you for your recent Fully Managed Server purchase. We are available 24 hours a day, 7 days a week to assist you. Your server is now available and online. You can log into Plesk by accessing your My Account page, expanding the \"Servers\" section, clicking Manage next to your server, then clicking the green \"Manage Server\" button.  You can also access WHM/cPanel directly by going to the following URL \"https://" + ipAddr + ":8443\" and logging in with the username \"root\" and the password you setup during the server setup\n.As part of the Fully Managed plan, we provide an orientation of your server over the telephone if needed. Please call us at anytime at 480-366-3310. This will take approximately 30 to 45 minutes, and cover the important aspects of your server and any initial questions you may have.\n\nOur Fully Managed Server package offers several resources to help you get started:\n\n- <a href=\"http://support.godaddy.com\" class=\"external-link\" rel=\"nofollow\">Online Help Center<\\/a>\n- 24/7 Phone Support 480-366-3310\n\nPlease reach out to us with any questions.\n\n\nBest regards,\n" + agentName + "\nManaged Services";
      document.getElementById('txtCan').value = plkStrg;
    } else {
      alert("Please choose a control panel");
    }
  }
};
//resets the form
resetFunct = function() {
  document.getElementById('canForm').reset();
};

document.cookie ="username=Rick M."
var agentName = document.cookie;
