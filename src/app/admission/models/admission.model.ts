export class Admission 
{
    public id: number|undefined = undefined;
    public userId: number|undefined = undefined;
    public instituteId: number|undefined = undefined;
    public courseId: number|undefined = undefined;
    public dateOfAdmission: Date = new Date();
    public refId: number|undefined = undefined;

    constructor(){}
}