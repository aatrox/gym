'use strict';

/**
 * @ngdoc function
 * @name gymApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gymApp
 */
 angular.module('gymApp')
 .controller('MainCtrl', function ($scope) {
    $('#container').highcharts({
        chart: {
            type: 'spline',
            margin: [70, 50, 60, 80],
            // events: {
            //     click: function (e) {
            //         // find the clicked values and the series
            //         var x = e.xAxis[0].value,
            //         y = e.yAxis[0].value,
            //         series = this.series[0];

            //         // Add it
            //         series.addPoint([x, y]);

            //     }
            // }
        },
        title: {
            text: 'work out data'
        },
        
        xAxis: {
            title:{
                text: 'Date'
            },
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'weight'
            }
            // ,
            // minPadding: 0.2,
            // maxPadding: 0.2,
            // maxZoom: 60,
            // plotLines: [{
            //     value: 0,
            //     width: 1,
            //     color: '#808080'
            // }]
        },
        // legend: {
        //     enabled: false
        // },
        // exporting: {
        //     enabled: false
        // },
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         point: {
        //             events: {
        //                 'click': function () {
        //                     if (this.series.data.length > 1) {
        //                         this.remove();
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        series: [
            {
                data: []
            },
            {
                data: []
            },
            {
                data: []
            }
        ]
    });
    
    $scope.disbm= function(){
      var chart = $("#container").highcharts();
      console.log($scope.person);
      console.log($scope.wdate);
      console.log($scope.wweight);

      chart.series[$scope.person].addPoint([$scope.wdate, $scope.wweight]);
      console.log(chart.series);
    }
});




