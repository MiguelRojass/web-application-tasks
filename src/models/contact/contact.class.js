import { ONLINE } from "./online.enum";

export class Contact {
    name = '';
    surname = '';
    email = '';
    online = ONLINE.ONLINE;

    constructor(name, surname, email, online) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.online = online;
    }
}