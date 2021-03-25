import {Snake} from './Classes/snake';
import {Horse} from './Classes/horse';
import {Animal} from './Classes/animal';

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);