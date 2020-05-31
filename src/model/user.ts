import { Profile } from './profile';

export class User {

    id: number;
    username: string;
    password: string;
    createdDate: Date;
    updatedDate: Date;
    active: boolean;

    profile: Profile;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    // constructor(username: string, password: string,
    //     createdDate: Date, updatedDate: Date, active: boolean) {
    //     // this.id = id;
    //     this.username = username;
    //     this.password = password;
    //     this.createdDate = createdDate;
    //     this.updatedDate = updatedDate;
    //     this.active = active;
    // }
}