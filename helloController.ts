interface IHelloWorldModel {
    message: string;
}

class helloCtrl implements IHelloWorldModel{
    message: string;
    
    constructor(){
        this.message = "Hello world!";
    }
}

angular.module("helloWorld")
    .controller("helloCtrl", helloCtrl);