/*
Note: You may need to add a AngularJS link for some functions to work.
*/

function getDataFromHttpFile(filePort, file) {
  filePort.get(file)
    .then(function(response) {
      $scope.res = response;
    });
  $scope.objData = {response: $scope.res, responseData: $scope.res.data, status: $scope.res.status};
  return objData;
}
function createModule(moduleName, dependcy) {
  return angular.module(moduleName, dependcy)
}
function createCtrler(varible, ctrlName, func) {
  return varible.controller(ctrlName, func)
}
function createDirective(vari, name="helloWorld", func, exec) {
  if (func == undefined) {
    func = function() {
      return {
        "<code>Hello world!</code>"
      };
    }
  }
  vari.directive(name, func);
  if (exec == true) {
    document.write(func());
  }
}
