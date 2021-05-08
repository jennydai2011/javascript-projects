var Person = /** @class */ (function () {
    function Person() {
        this.name = "test";
    }
    Person.age = 18;
    return Person;
}());
var per = new Person();
console.log(per.name);
console.log(Person.age);
