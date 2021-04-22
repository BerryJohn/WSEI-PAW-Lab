import {StandardUser,
        ModeratorUser,
        AdminUser} from './userClasses';
import {Resource} from './resources';

const user1 = new StandardUser("Yuri", "Owsienko");
const user2 = new ModeratorUser("Robert", "Kubica");
const user3 = new AdminUser("Zbigniew", "Wodecki");

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

const res1 = new Resource();

res1.read(user1);
res1.modify(user1);
res1.read(user2);
res1.modify(user2);
res1.read(user3);
res1.modify(user3);