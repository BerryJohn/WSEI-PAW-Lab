import {Role} from './enumRoles';

export function StandardAcces(constructorFn: Function): void{
    constructorFn.prototype.role = Role.Standard;
}
export function ModeratorAcces(constructorFn: Function): void{
    constructorFn.prototype.role = Role.Moderator;
}
export function AdminAcces(constructorFn: Function): void{
    constructorFn.prototype.role = Role.Admin;
}

export function watch(target: object, propKey: string, descriptor: PropertyDescriptor): void {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
      console.log(`User: ${param} wants ${propKey}`);
      return originalFn.call(this, param);
    };    
}

export function forModerator(target: object)
{

}