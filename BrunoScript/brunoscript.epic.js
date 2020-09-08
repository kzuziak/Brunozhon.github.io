var brunoscript = {}; //Creates a new empty object
brunoscript.bindElement = function(id, data) {
  var elem = document.getElementById(id);
  elem.innerHTML = data;
}
brunoscript.objectDecode = function(obj) {
  var x, txt;
  if (brunoscript.isRealObject(obj)) {
    for (x = 0; x < Object.values(obj).length; x++) { //Deocdes the object by the key
      txt += obj[x];
      if (Object.values(obj).length - 1 > x) {
        txt += ", ";
      }
    }
    return txt;
  }
}
brunoscript.isRealObject(obj) {
  if (
     typeof obj == "object" && /*A object...*/
     obj !== null && /*Value of object != null...*/
     /*
     Not a Boolean...
     Not a Date...
     Not a Number...
     Not a RegExp...
     Not a string...
     */
     !(obj instanceof Boolean) &&
     !(obj instanceof Date) &&
     !(obj instanceof Number) &&
     !(obj instanceof RegExp) &&
     !(obj instanceof String)
  ) {
    return true;
  } else {
    return false;
  }
}
brunoscript.objectEncode(str) {
  eval("return " + str);
}
