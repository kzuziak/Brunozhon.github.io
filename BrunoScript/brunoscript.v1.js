function getXPathResult(file, path) {
  var nodes, result, txt;
  if (file.evaluate) {
    nodes = file.evaluate(path, file, null, XPathResult.ANY_TYPE, null);
    result = nodes.iterateNext();
    while (result) {
      txt += result.childNodes[0].nodeValue + "<br>";
      result = nodes.iterateNext();
    }
  } else {
    txt = "Sorry, your browser does not surport the .evaluate function";
  }
  return txt;
}
