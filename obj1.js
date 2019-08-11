var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.fucmove = function (age) {
        console.log("this Dog age " + age);
    };
    Animal.prototype.funmove = function (name) {
        console.log("you Name is " + name);
    };
    Animal.prototype.sum = function (a, b) {
        if (b === void 0) { b = 45; }
        this.num1 = a;
        this.num2 = b;
        console.log(this.total = this.num1 + this.num2);
    };
    Animal.prototype.loop = function (i) {
        for (var j = 1; j <= i; j++)
            console.log(j);
    };
    Animal.prototype.sortarray = function () {
        var myarray = [97967, 5757, 64, 565, 363, 464, 47, 48, 68];
        var sort_value = myarray.sort();
        sort_value.forEach(function (element) {
            console.log(element);
        });
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('woof wooof ');
    };
    return Dog;
}(Animal));
var dog1 = new Dog();
dog1.bark();
dog1.fucmove(45);
dog1.funmove("sima");
dog1.bark();
dog1.sum(45);
dog1.loop(5);
dog1.sortarray();
