

(function(){
    var app = angular.module('retrobooth', ['ionic']);

    app.directive('headerController', function(){
        return {
            restrict: 'E',
            templateUrl: 'header-controller.html',
            controller: ['$http', function($http){
                document.addEventListener("deviceready", init, false);

                function init() {

                    function onSuccess(imageData) {
                        console.log('success');
                        var card = document.getElementById('card').style.visibility='visible';
                        var image = document.getElementById('myImage');

                        image.src = imageData;

                        var options = {
                            onError: function() {
                                alert('ERROR');
                            }
                        };

                        var effect = {
                            vignette: 0.6,
                            sepia: true
                        };

                        new VintageJS(image, options, effect);
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }

                    document.querySelector("#takePicture").addEventListener("touchend", function() {
                        navigator.camera.getPicture(onSuccess, onFail, {
                            quality: 50,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            destinationType: Camera.DestinationType.FILE_URI,
                            allowEdit: 1
                        });

                    });

                    document.querySelector("#usePicture").addEventListener("touchend", function() {
                        navigator.camera.getPicture(onSuccess, onFail, {
                            quality: 50,
                            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                            destinationType: Camera.DestinationType.FILE_URI,
                            allowEdit: 1
                        });

                    });

                    //save from canevas
                    document.querySelector("#save").addEventListener("touchend", function() {

                    });

                }

            }],
            controllerAs: 'header'
        };
    });
})();