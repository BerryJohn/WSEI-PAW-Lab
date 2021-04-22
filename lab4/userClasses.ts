import {Role} from './enumRoles';
import {StandardAcces,
        ModeratorAcces,
        AdminAcces} from './decorators';

export class User{
    name: string;
    surname: string;
    role: Role;

    toString(): string{
        return `${this.name} ${this.surname} ${this.role}`;
    }
}

@StandardAcces
export class StandardUser extends User{
    constructor(name:string, surname: string)
    {
        super();
        this.name = name;
        this.surname = surname;
    }
}
@ModeratorAcces
export class ModeratorUser extends User{
    constructor(name:string, surname: string)
    {
        super();
        this.name = name;
        this.surname = surname;
    }
}
@AdminAcces
export class AdminUser extends User{
    constructor(name:string, surname: string)
    {
        super();
        this.name = name;
        this.surname = surname;
    }
}