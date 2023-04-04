class Car{
    constructor(name){
        this.brand = name;
    }
    //Method in Classes
    present(){
        return 'I have a' + this.brand;
    }
}
//Inheritance: ingerit all methods from parent.
class Model extends Car{// key word "extends"
    constructor(name, mod){
        super(name); //"super": calls parent's constructor
        this.model = mod;
    }
    show(){
        return 'I have a '+ this.present()+'It is a ' + this.model;
    }
}

const mycar = new Model("Ford", "Musting");
mycar.show();
