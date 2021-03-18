
const userName: string = 'John';

document.body.innerHTML = `<h1>Hello ${userName}</h1>`;

class Person{
    _name: string;
    _surname: string;
    _age: number;
    constructor(name: string, surname: string, age: number)
    {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }
    Show()
    {
        document.body.innerHTML = `<h1>Hello ${this._name} ${this._surname}, you are ${this._age} yo</h1>`;
    }
}

let p = new Person("John", "Blake", 11);

p.Show();