'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gymApp
 */

angular.module('gymApp')
  .controller('AboutCtrl', function ($scope) {

  	$scope.iniwt = [['di', 50], ['yujing', 50], ['qi', 50]];
    console.log($scope.iniwt);
    $('#chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'who is the fat boy?'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: angular.copy($scope.iniwt)
        }]
    });

  $scope.dipie = function(){
	  var chart = $('#chart').highcharts()
    $scope.iniwt[$scope.name][1] = $scope.weight;
    console.log($scope.iniwt);
	  chart.series[0].setData($scope.iniwt);
	}

  });

