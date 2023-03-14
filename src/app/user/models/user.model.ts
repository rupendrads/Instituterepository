export class User {
    
    public firstname: string = '';
    public lastname: string = '';
    public username: string = '';
    public password: string = '';
    public birthdate: Date = new Date();
    public gender: string = '';
    public phoneno: string = "";
    public email: string = '';
    public address: string = '';
    public usertype: string = '';
    
    constructor(fname: string, lname: string, uname: string, pword: string, birthdt: Date, gen: string, phone: string, email: string, add: string, type: string) {
       
        this.firstname = fname;
        this.lastname = lname;
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