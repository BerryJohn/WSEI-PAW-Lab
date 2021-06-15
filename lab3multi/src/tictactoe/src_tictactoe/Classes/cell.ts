export class cell{
    _value: string = '';
    _htmlElement: HTMLElement;
    
    constructor(element: HTMLElement, value?: string)
    {   
        if(value)
            this._value = value;
        this._htmlElement = element;
    }
    changeValue(newValue: string)
    {
        if(this._value === ''){
            this._value = newValue;
            this._htmlElement.innerHTML = this._value;
        }
    }
    refresh()
    {
        this._htmlElement.innerHTML = this._value;
    }
}