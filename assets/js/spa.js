angular.module('Platzi',[]);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){

  io.socket.get('/emoji', function (data){
    $scope.emojis = data;
    $scope.$apply();
  });

  io.socket.on('emoji', function (event){
    switch (event.verb) {
      case 'created' :
        $scope.emojis.push(event.data);
        $scope.apply();
        break;
    }
  });
<<<<<<< HEAD

  $scope.emojis = [{
    id: 123456,
    text: ':)'
  },
  {
    id: 12345,
    text: ':('
  }];
=======
>>>>>>> 042d0c5d6086705228feac6e6c6031561e12552d
}]);
