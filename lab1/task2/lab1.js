var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + " " + person.age + " " + person.role);
}
function filterPersons(persons, criteria) {
    //TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    return persons
        .filter(function (el) {
        var meetsCriteria = true;
        for (var key in criteria) {
            if (el[key] != criteria[key] && typeof el[key] != "undefined")
                meetsCriteria = false;
        }
        if (meetsCriteria)
            return el;
    });
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log("---- log person ----");
users.forEach(function (el) { return logPerson(el); });
admins.forEach(function (el) { return logPerson(el); });
var persons = __spreadArray(__spreadArray([], admins), users);
console.log("---- spread ----");
persons.forEach(function (el) { return logPerson(el); });
var filterYear = persons.filter(function (el) { return el.age > 25; });
console.log("---- powyzej 25 lat ----");
filterYear.forEach(function (el) { return logPerson(el); });
console.log("---- Filter criteria ----");
var filtered = filterPersons(persons, { name: 'Adam' });
filtered.forEach(function (el) { return logPerson(el); });
