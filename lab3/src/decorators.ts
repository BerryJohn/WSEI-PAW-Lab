export function disabled(constructorFn: Function): void{
    constructorFn.prototype.isDisabled = true;
}

export function enabled(constructorFn: Function): void{
    constructorFn.prototype.isDisabled = false;
}

export function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
      console.log(`${target.constructor.name} is running!`);
      return originalFn.call(this, param);
    };    
}