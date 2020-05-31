export class Profile{
    id:number;
    email:string;
    firstName:string;
    middleName:string;
    lastName:string;
    dateOfBirth:string;
    gender:string;
    address:string;
    createdDate: Date;
    updatedDate: Date;
    active: boolean;

    constructor(email:string, firstName:string, lastName:string, gender: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }


}