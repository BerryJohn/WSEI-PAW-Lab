interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;    
}
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    console.log(`${person.name} ${person.surname} ${person.age} ${person.role}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
     //TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
     return persons
        .filter(el => {
            let meetsCriteria: boolean = true;
            for (const key in criteria) {
                if(el[key] != criteria[key]) // ?->&& typeof el[key] != "undefined"
                    meetsCriteria = false;
            }
            return meetsCriteria;
        })
    }   
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log("---- log person ----");
    users.forEach( el => logPerson(el));
    admins.forEach( el => logPerson(el));
    const persons: Person[] = [...admins,...users];

    console.log("---- spread ----");
    persons.forEach(el => logPerson(el));
    const filterYear: Person[] = persons.filter( el => el.age > 25);

    console.log("---- powyzej 25 lat ----");
    filterYear.forEach(el => logPerson(el));

    console.log("---- Filter criteria ----");
    const filtered = filterPersons(persons, {name: 'Adam'});
    filtered.forEach(el => logPerson(el));
