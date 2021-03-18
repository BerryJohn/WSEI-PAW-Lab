var userName = 'John';
document.body.innerHTML = "<h1>Hello " + userName + "</h1>";
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h1>Hello " + this._name + " " + this._surname + ", you are " + this._age + " yo</h1>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
