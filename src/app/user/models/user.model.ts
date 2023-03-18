export class User {
    public id: number|undefined = undefined;
    public instituteId: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public username: string = '';
    public password: string = '';
    public birthdate: Date = new Date();
    public gender: string = '';
    public phoneno: string = "";
    public email: string = '';
    public address: string = '';
    public usertype: string = '';
    
    constructor(instituteId: string, fname: string, lname: string, uname: string, pword: string, birthdt: Date, gen: string, phone: string, email: string, add: string, type: string) {
        this.instituteId = instituteId;
        this.firstName = fname;
        this.lastName = lname;
        this.username = uname;
        this.password = pword;
        this.birthdate = birthdt;
        this.gender = gen;
        this.phoneno = phone;
        this.email = email;
        this.address = add;
        this.usertype = type;        
    }
}