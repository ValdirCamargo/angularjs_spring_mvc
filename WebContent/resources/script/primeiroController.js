var app = angular.module('loja',[]);

app.controller('primeiroController',['$scope',function($scope){
	$scope.user = {meuNome:'Valdir ', meuSobrenome:' de Camargo'};
	
}])