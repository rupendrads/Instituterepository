export class User {
    
    public firstname: string = '';
    public lastname: string = '';
    public username: string = '';
    public password: string = '';
    public birthdate: string = '';
    public gender: string = '';
    public phoneno: number = 0;
    public email: string = '';
    public address: string = '';
    
    
    constructor(fname: string, lname: string, uname: string, pword: string, birthdt: string, gen: string, phone: number, email: string, add: string) {
       
        this.firstname = fname;
        this.lastname = lname;
        this.username = uname;
        this.password = pword;
        this.birthdate = birthdt;
        this.gender = gen;
        this.phoneno = phone;
        this.email = email;
        this.address = add;
        
    }
}