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

=======
<<<<<<< HEAD
>>>>>>> 28de037313b04bc13d8fc9c6f7c77ff38b4e9dfb

  $scope.emojis = [{
    id: 123456,
    text: ':)'
  },
  {
    id: 12345,
    text: ':('
  }];
<<<<<<< HEAD

=======
=======
>>>>>>> 042d0c5d6086705228feac6e6c6031561e12552d
>>>>>>> 28de037313b04bc13d8fc9c6f7c77ff38b4e9dfb
}]);
