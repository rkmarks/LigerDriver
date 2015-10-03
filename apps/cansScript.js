emailFunct = function(ipAddr, usrNme) {
  var ipAddr = document.getElementById('ipAddress').value;
  if (!ipAddr) {
    alert("Please enter an IP address");
  } else {
    if (document.getElementById('controlPdrop').value == "cPanel") {
      var cpStrg = "Valued Customer,\n\n" + "I am writing to thank you for your recent Fully Managed Server purchase. We are available 24 hours a day, 7 days a week to assist you. Your server is now available and online. You can log into cPanel by accessing your My Account page, expanding the \"Servers\" section, clicking Manage next to your server, then clicking the green \"Manage Server\" button.  You can also access WHM/cPanel directly by going to the following URL \"https://" + ipAddr +":2087\" and logging in with the username \"root\" and the password you setup during the server setup\n.As part of the Fully Managed plan, we provide an orientation of your server over the telephone if needed. Please call us at anytime at 480-366-3310. This will take approximately 30 to 45 minutes, and cover the important aspects of your server and any initial questions you may have.\n\nOur Fully Managed Server package offers several resources to help you get started:\n\n- <a href=\"http://support.godaddy.com\" class=\"external-link\" rel=\"nofollow\">Online Help Center<\\/a>\n- 24/7 Phone Support 480-366-3310\n\nPlease reach out to us with any questions.\n\n\nBest regards,\n" + "\nManaged Services";
      document.getElementById('txtCan').value = cpStrg;
    }
    else if (document.getElementById('controlPdrop').value == "Plesk") {
        var plkStrg = "Valued Customer,\n\n\t" + "I am writing to thank you for your recent Fully Managed Server purchase. We are available 24 hours a day, 7 days a week to assist you. Your server is now available and online. You can log into Plesk by accessing your My Account page, expanding the \"Servers\" section, clicking Manage next to your server, then clicking the green \"Manage Server\" button.  You can also access WHM/cPanel directly by going to the following URL \"https://" + ipAddr +":8443\" and logging in with the username \"root\" and the password you setup during the server setup\n.As part of the Fully Managed plan, we provide an orientation of your server over the telephone if needed. Please call us at anytime at 480-366-3310. This will take approximately 30 to 45 minutes, and cover the important aspects of your server and any initial questions you may have.\n\nOur Fully Managed Server package offers several resources to help you get started:\n\n- <a href=\"http://support.godaddy.com\" class=\"external-link\" rel=\"nofollow\">Online Help Center<\\/a>\n- 24/7 Phone Support 480-366-3310\n\nPlease reach out to us with any questions.\n\n\nBest regards,\n" + "\nManaged Services";
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

setCookie = function(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

checkCookie = function() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your first name and last name initial:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
