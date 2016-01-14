var helloCtrl = (function () {
    function helloCtrl() {
        this.message = "Hello world!";
    }
    return helloCtrl;
})();
angular.module("helloWorld")
    .controller("helloCtrl", helloCtrl);
