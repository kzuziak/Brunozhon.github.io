function setCookie(cname, cval, exdays) {
  var d = new Date(); 
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cval + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  var c = "";
  for (var i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) == "") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie(cname, msg, qmsg, exdays) {
  var data = getCookie(cname);
  if (data != "") {
    alert(msg + data);
  } else {
    data = prompt(qmsg + ": ");
    if (data != "" || data != null) {
      setCookie(cname, data, exdays);
    }
  }
}
