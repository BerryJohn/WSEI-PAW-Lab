import { watch } from "./decorators";
import { Role } from "./enumRoles";
import { User } from "./userClasses";

export class Resource {
    private resourceValue: string;
    constructor() {
        this.resourceValue = "resource value";        
    }

    @watch
    public read(user: User): void {
        if (user.role === Role.Moderator || user.role === Role.Admin) {
            console.log(this.resourceValue);
        }
    }
    @watch
    public modify(user: User): void {
        if (user.role === Role.Admin) {
            this.resourceValue = "changed resource value";
            console.log(this.resourceValue);
        }
    }
    
}