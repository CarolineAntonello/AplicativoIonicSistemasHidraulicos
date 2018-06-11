
var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, MaterialsService) {

$scope.openPDF = function(url, link_type) {

        if (ionic.Platform.isAndroid()) {

            if (link_type !== undefined && link_type !== null) {

                if (link_type.toLowerCase() !== 'html'){

                    url ='https://docs.google.com/viewer?url=' +   encodeURIComponent(url);
                }
            }
        }

        var ref = window.open(url, '_system', 'location=yes');
    }                                           
});

//openURL(url) {
//    InAppBrowser.open(url,'_system','location=yes');
//}